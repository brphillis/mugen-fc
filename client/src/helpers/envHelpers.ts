// corrects the host for client requests when servers are running in docker network ( changes named host to localhost on client )
export const correctHost = (url: string, isClientRequest?: boolean): string => {
  const isLocal = process.env.APP_ENV === "local";

  if (isLocal && isClientRequest) {
    const urlToCheck = new URL(url);
    urlToCheck.hostname = "localhost";

    return urlToCheck.origin;
  } else {
    return url;
  }
};
