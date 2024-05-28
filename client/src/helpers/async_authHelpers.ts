import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { authServerBaseUrl } from "../../const";

// pass headers when fetching user next serverside
export const get_authenticatedUser = async (
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

    const response = await fetch(`${authServerBaseUrl}/auth`, options);

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
