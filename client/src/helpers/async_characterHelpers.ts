const isLocal =
  process.env.APP_ENV === "local" || process.env.APP_ENV === "localcontainer";

// GET - Returns Available Characters
export const get_CharacterPortraits = async (
  url: string
): Promise<{
  portraits?: Base64Image[];
  error?: string;
}> => {
  if (!url) {
    return { error: `no bucket server url` };
  }

  try {
    let reqUrl = `${url}/api/characters/portraits`;

    const response = await fetch(reqUrl, {
      method: "GET",
      cache: isLocal ? "no-cache" : "force-cache",
    });

    if (!response.ok) {
      return { error: `error: ${response.statusText}` };
    }

    const portraits: Base64Image[] = await response.json();

    return { portraits };
  } catch (error) {
    return {
      error: `failed to fetch portraits: ${(error as Error).message}`,
    };
  }
};

export const get_CharacterAnims = async (
  url: string
): Promise<{
  anims?: Base64Image[];
  error?: string;
}> => {
  if (!url) {
    return { error: `no bucket server url` };
  }

  try {
    let reqUrl = `${url}/api/characters/anim`;

    const response = await fetch(reqUrl, {
      method: "GET",
      cache: isLocal ? "no-cache" : "force-cache",
    });

    if (!response.ok) {
      return { error: `error: ${response.statusText}` };
    }

    const anims: Base64Image[] = await response.json();

    return { anims };
  } catch (error) {
    return {
      error: `failed to fetch portraits: ${(error as Error).message}`,
    };
  }
};
