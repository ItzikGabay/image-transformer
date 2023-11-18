import {
  IImageCard,
  ImageCard,
} from "@components/ui/image-card/image-card.component";
import { DownloadAllButton } from "@components/ui/download-all";

interface IImageCardList {
  images: IImageCard[];
}

export const ImageCardList = ({ images }: IImageCardList) => {
  if (!images?.length) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {images.map((imageProps, index) => (
        <ImageCard imageDataUrl={imageProps.imageDataUrl} key={index} />
      ))}
      <DownloadAllButton images={images} />
    </div>
  );
};
