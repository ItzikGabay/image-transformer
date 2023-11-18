import { ImagePreview } from "@components/ui/image-preview/image-preview.component";
import { DownloadImageButton } from "@components/ui/download-image";

export interface IImageCard {
  imageDataUrl: string;
}

export const ImageCard = ({ imageDataUrl }: IImageCard) => {
  const identifier = new Date().getTime();

  return (
    <div style={{ margin: "10px", textAlign: "center" }}>
      <ImagePreview imageDataUrl={imageDataUrl} identifier={identifier} />
      <DownloadImageButton
        imageDataUrl={imageDataUrl}
        identifier={identifier}
      />
    </div>
  );
};
