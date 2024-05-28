export const parseQueryString = (
  queryString: string
): { [key: string]: string } => {
  const params: { [key: string]: string } = {};
  queryString.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    ($0: string, $1: string, $2: string, $3: string) => {
      params[$1] = decodeURIComponent($3);
      return "";
    }
  );
  return params;
};
