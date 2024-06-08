import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

// pass headers when fetching user next serverside
export const get_authenticatedUser = async (
  headers?: ReadonlyHeaders,
  authServerUrl?: string
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

    console.log("AUTH SERVER URL", authServerUrl);
    if (process.env.NEXT_PUBLIC_AUTH_SERVER_URL) {
      console.log(
        "ENVAUTH SERVER URL",
        process.env.NEXT_PUBLIC_AUTH_SERVER_URL
      );
    }

    const response = await fetch(
      `${
        authServerUrl ? authServerUrl : process.env.NEXT_PUBLIC_AUTH_SERVER_URL
      }/auth`,
      options
    );

    console.log("RES IS", response);

    if (!response.ok) {
      return { error: `Error: ${response.statusText}` };
    }

    const user = await response.json();

    console.log("todo: authenticated user", user);

    return { user };
  } catch (error) {
    return {
      error: `Failed to get Authenticated User: ${(error as Error).message}`,
    };
  }
};
