import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

// pass headers when fetching user next serverside
export const get_authenticatedUser = async (
  authServerUrl: string,
  headers?: ReadonlyHeaders
): Promise<{
  user?: User;
  error?: string;
}> => {
  try {
    const options: RequestInit = {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    };

    if (headers) {
      options.headers = headers;
    }

    console.log(
      `getting authenticated user from endpoint: ${authServerUrl}/auth`
    );

    const response = await fetch(`${authServerUrl}/auth`, options);

    console.log(
      "response from getting authenticated user from endpoint: ",
      response
    );

    if (!response.ok) {
      return { error: `Error: ${response.statusText}` };
    }

    const user = await response.json();

    return { user };
  } catch (error) {
    return {
      error: `Failed to get Authenticated User: ${(error as Error).message}`,
    };
  }
};
