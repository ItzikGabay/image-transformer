interface IDownloadImage {
  imageDataUrl: string;
  identifier: string | number;
}

export const DownloadImageButton = ({
  imageDataUrl,
  identifier,
}: IDownloadImage) => {
  return (
    <a
      href={imageDataUrl}
      download={`tsfm_${identifier}.png`}
      style={{
        display: "inline-block",
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        textDecoration: "none",
        fontSize: "16px",
        marginTop: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Download Image {identifier}
    </a>
  );
};
