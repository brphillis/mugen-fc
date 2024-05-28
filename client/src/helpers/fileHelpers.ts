export const base64ImageToBuffer = (base64String: string): Buffer => {
  const base64Data = base64String.replace(/^data:image\/jpeg;base64,/, "");

  const buffer = Buffer.from(base64Data, "base64");

  return buffer;
};

export const convertToBase64Image = async (
  file: File
): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Ensure the result is a string
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert the file to base64."));
      }
    };

    reader.onerror = () => {
      reject(new Error("There was an error reading the file."));
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  });
};

export const blobToFile = (blob: Blob, fileName: string): File => {
  // Convert blob to file by appending the fileName
  const file = new File([blob], fileName, {
    type: blob.type,
    lastModified: Date.now(),
  });
  return file;
};

export const resizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // Calculate new dimensions while maintaining aspect ratio
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to resize the image."));
          }
        }, file.type);
      } else {
        reject(new Error("Failed to get canvas context."));
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load the image."));
    };
  });
};

export const base64toBufferedBinary = (dataURI: string) => {
  const BASE64_MARKER = ";base64,";
  const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  const base64 = dataURI.substring(base64Index);
  const raw = atob(base64);
  const rawLength = raw.length;
  const array = new Uint8Array(new ArrayBuffer(rawLength));

  for (let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return Buffer.from(array);
};

export const getImageTypeFromBase64 = (base64String: string): string => {
  // Extract the data URI header (e.g., "data:image/jpeg;base64")
  const baseHeader = base64String.split(";")[0];

  // Extract the image type from the header
  const imageType = baseHeader.split(":")[1];

  return imageType;
};
