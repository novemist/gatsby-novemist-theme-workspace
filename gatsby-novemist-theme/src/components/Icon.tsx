import React from "react";

interface IconProps {
  src: string;
  widthSize?: string;
  indentRight?: string;
}

export const Icon = ({
  src,
  widthSize = "initial",
  indentRight,
}: IconProps) => {
  return (
    <img
      src={src}
      alt=""
      style={{ width: widthSize, marginRight: indentRight }}
    />
  );
};
