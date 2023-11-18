import React from "react";

interface IInputUpload {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputUpload = ({ onChange }: IInputUpload) => {
  return <input type="file" accept="image/*" multiple onChange={onChange} />;
};
