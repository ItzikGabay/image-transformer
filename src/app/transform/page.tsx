"use client";
import { useState, ChangeEvent, useCallback } from "react";
import { ImageCardList } from "@components/ui/image-card";
import { InputUpload } from "@components/ui/input-upload";
import { handleImageUpload } from "@lib/transformer";
import { IImage } from "@lib/transformer/zip";

export default function Transform() {
  const [images, setImages] = useState<{ file: File; imageDataUrl: string }[]>(
    [],
  );

  const onImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      handleImageUpload(event).then((processedImages: IImage[]) =>
        setImages(processedImages),
      ),
    [],
  );

  return (
    <div>
      <InputUpload onChange={onImageUpload} />
      {images && <ImageCardList images={images} />}
    </div>
  );
}
