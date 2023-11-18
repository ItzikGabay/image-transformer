"use client";
import { useEffect, useState } from "react";
import { convertImagesIntoZip } from "@lib/transformer/zip";

export const DownloadAllButton = ({ images }: any) => {
  const [zipUrl, setZipUrl] = useState<string | null>(null);
  const [hasDownloaded, setHasDownloaded] = useState<boolean>(false);

  const downloadAction = async () => setHasDownloaded(true);

  useEffect(() => {
    convertImagesIntoZip(images)
      .then((zipUrl: string) => setZipUrl(zipUrl))
      .catch((err) => console.log(err));
  }, [images, hasDownloaded]);

  useEffect(() => {
    // cleanup zipUrl after download
    return () => {
      if (zipUrl) {
        URL.revokeObjectURL(zipUrl);
        setZipUrl(null);
      }
    };
  }, [hasDownloaded]);

  if (!zipUrl || images?.length < 2) return null;

  return (
    <a
      href={zipUrl}
      download="bordered_images.zip"
      onClick={downloadAction}
      style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#2196F3",
        color: "white",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Download all
    </a>
  );
};
