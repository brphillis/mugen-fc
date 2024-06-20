import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const get_client_logoutGoogle = async (
  authUrl: string
): Promise<{
  success?: string;
  error?: string;
}> => {
  if (!authUrl) {
    return { error: "no auth server url" };
  }

  try {
    const options: RequestInit = {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    };

    const url = authUrl + "/logout";

    const response = await fetch(url, options);

    if (!response.ok) {
      return { error: `error logging out: ${response.statusText}` };
    }

    const success = await response.json();

    return { success };
  } catch (error) {
    return {
      error: `(catch) error: ${(error as Error).message}`,
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

      return { redirectUrl: newAuthResponse.url };
    }
  } catch (error) {
    return {
      error: `(catch) get_authenticateduser error: ${(error as Error).message}`,
    };
  }
};
