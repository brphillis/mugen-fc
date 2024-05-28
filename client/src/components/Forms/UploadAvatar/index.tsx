import {
  blobToFile,
  convertToBase64Image,
  resizeImage,
} from "@/helpers/fileHelpers";
import { placeholderAvatar } from "@/utility/placeholderAvatar";
import { useState } from "react";

type Props = {
  avatar?: any | null;
  onChange?: (value: string | React.ChangeEvent<HTMLSelectElement>) => void;
};

const UploadAvatar = ({ avatar, onChange }: Props) => {
  const [image, setImage] = useState<any | undefined>(avatar || undefined);

  return (
    <>
      <div className="flex items-center justify-center gap-6 py-1">
        <div className="avatar !cursor-pointer">
          <div className="w-32 rounded-full ring ring-primary mt-3">
            <label htmlFor="avatarInput">
              <img src={image || placeholderAvatar?.href} alt="user_avatar" />
            </label>
          </div>
        </div>

        <input
          type="hidden"
          name="avatar"
          value={JSON.stringify(image) || ""}
        />
      </div>

      <input
        id="avatarInput"
        type="file"
        accept="image/*"
        className="file-input file-input-bordered bg-primary/50 text-brand-white invisible w-0 h-0 -mt-6"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const resizedImage = await resizeImage(file, 150, 150);
            const convertedImage = await convertToBase64Image(
              blobToFile(resizedImage, "avatar")
            );

            if (convertedImage) {
              setImage(convertedImage);
            }

            if (convertedImage && onChange) {
              onChange(convertedImage);
            }
          }
        }}
      />
    </>
  );
};

export default UploadAvatar;
