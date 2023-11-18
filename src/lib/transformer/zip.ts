"use client";
import JSZip from "jszip";

export interface IImage {
  file: File;
  imageDataUrl: string;
}

/**
 * Convert images files into zip
 * @param images
 */
export const convertImagesIntoZip = async (images: IImage[]) => {
  const zip = new JSZip();

  await Promise.all(
    images.map(async ({ file, imageDataUrl }, index) => {
      const blob = await fetch(imageDataUrl).then((response) =>
        response.blob(),
      );
      zip.file(`bordered_image_${index + 1}.png`, blob);
    }),
  );

  const zipContent = await zip.generateAsync({ type: "blob" });

  // Create a URL for the zip file
  return URL.createObjectURL(zipContent);
};
