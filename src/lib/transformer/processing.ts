import { ChangeEvent } from "react";

export const convertEventTargetIntoFiles = (
  event: ChangeEvent<HTMLInputElement>,
) => {
  // "Array.from" is in order to create new instance
  return Array.from(event.target.files || []);
};

export const handleImageUpload = async (
  event: ChangeEvent<HTMLInputElement>,
) => {
  const files = convertEventTargetIntoFiles(event);

  return await Promise.all(
    files.map(async (file) => {
      const imageDataUrl = await processImage(file);
      return { file, imageDataUrl };
    }),
  );
};

const processImage = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = () => {
      const originalImage = new Image();
      originalImage.src = reader.result as string;

      originalImage.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;

        // Set canvas dimensions to include the white border
        canvas.width = originalImage.width + 80;
        canvas.height = originalImage.height + 250;

        // Draw the white border
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the original image on top of the white border
        context.drawImage(
          originalImage,
          40,
          40,
          originalImage.width,
          originalImage.height,
        );

        const text = "UI Bug"; // You can replace this with the desired text
        context.fillStyle = "#808080";
        context.font = "40px monospace";
        context.textAlign = "center";
        context.fillText(text, canvas.width / 2, canvas.height - 90);

        resolve(canvas.toDataURL("image/png"));
      };
    };

    reader.readAsDataURL(file);
  });
};
