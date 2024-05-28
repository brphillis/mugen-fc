declare global {
  type PageProps = {
    searchParams: SearchParams;
    params: Params;
  };

  type SearchParams = { [key: string]: string };
  type Params = { [key: string]: string };
}

export default global;
