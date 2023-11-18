interface IImagePreview {
  imageDataUrl: string;
  identifier: string | number;
}

export const ImagePreview = ({ imageDataUrl, identifier }: IImagePreview) => {
  return (
    <img
      src={imageDataUrl}
      alt={`bordered_image_${identifier}`}
      style={{ maxWidth: "100%", marginBottom: "10px", width: "600px" }}
    />
  );
};
