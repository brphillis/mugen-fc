import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const get_authenticatedUser = async (
  headers: ReadonlyHeaders
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
