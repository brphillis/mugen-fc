declare global {
  interface Error {
    message: string;
  }

  type Base64Image = {
    name: string;
    image: string;
  };
}

export default global;
