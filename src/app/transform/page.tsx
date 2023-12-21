"use client";
import { useState, ChangeEvent, useCallback } from "react";
import { ImageCardList } from "@components/ui/image-card";
import { InputUpload } from "@components/ui/input-upload";
import { handleImageUpload } from "@lib/transformer";
import { IImage } from "@lib/transformer/zip";
import { convertEventTargetIntoFiles } from "@lib/transformer/processing";

export default function Transform() {
  const [rawImages, setRawImages] = useState<File[]>([]); // [File, File, File
  const [images, setImages] = useState<{ file: File; imageDataUrl: string }[]>(
    [],
  );

  const onImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      handleImageUpload(event)
        .then(setImages)
        .then(() => setRawImages(convertEventTargetIntoFiles(event)))
        .catch(console.error),
    [],
  );

  return (
    <div>
      <InputUpload onChange={onImageUpload} />
      {images && <ImageCardList images={images} />}
    </div>
  );
}
