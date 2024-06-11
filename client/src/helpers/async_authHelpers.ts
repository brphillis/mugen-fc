import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const get_client_logoutGoogle = async (
  authUrl: string
): Promise<{
  success?: string;
  error?: string;
}> => {
  console.log("clicked");

  if (!authUrl) {
    console.log("return err");
    return { error: "no auth server url" };
  }

  try {
    const options: RequestInit = {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    };

    const url = authUrl + "/logout";

    console.log("fetching at", url);

    const response = await fetch(url, options);

    if (!response.ok) {
      console.log("err", `${response.statusText}`);
      return { error: `error logging out: ${response.statusText}` };
    }

    const success = await response.json();

    console.log("res", success);

    return { success };
  } catch (error) {
    return {
      error: `(catch) get_logoutgoogle error: ${(error as Error).message}`,
    };
  }
};

export const get_authenticatedUser = async (
  headers: ReadonlyHeaders,
  preventRedirect?: boolean
): Promise<{
  user?: User;
  redirectUrl?: string;
  error?: string;
}> => {
  let authServerUrl = process.env.AUTH_URL;

  if (!authServerUrl) {
    return { error: "no auth server url" };
  }

  try {
    const options: RequestInit = {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    };

    if (headers) {
      options.headers = headers;
    }

    const response = await fetch(`${authServerUrl}/auth`, options);

    console.log("get_authenticatedUser response: ", response);

    if (response.ok) {
      const user = await response.json();

      return { user };
    } else if (preventRedirect) {
      return { user: undefined };
    } else {
      const newAuthResponse = await fetch(
        `${authServerUrl}/auth/google`,
        options
      );

      if (!newAuthResponse.ok) {
        return { error: `error: ${newAuthResponse.statusText}` };
      }

      console.log("newauth response: ", newAuthResponse);

      return { redirectUrl: newAuthResponse.url };
    }
  } catch (error) {
    return {
      error: `(catch) get_authenticateduser error: ${(error as Error).message}`,
    };
  }
};
