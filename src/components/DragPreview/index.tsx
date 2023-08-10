import React from "react";
import { DrawPreviewWrapper } from "./styles";

export const DragPreview: React.FC<any> = (props) => {
  const item = props?.monitorProps?.item;

  return <DrawPreviewWrapper>{item?.text}</DrawPreviewWrapper>;
};
