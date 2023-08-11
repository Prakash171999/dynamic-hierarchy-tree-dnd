import React, { useState } from "react";

export const AddItemForm: React.FC = (props) => {
  const [text, setText] = useState("");
  const [fileType, setFileType] = useState("text");
  const [parent, setParent] = useState(0);
  const [droppable, setDroppable] = useState(false);

  const handleChangeText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  const handleChangeParent = (e: { target: { value: any } }) => {
    setParent(Number(e.target.value));
  };

  const handleChangeDroppable = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setDroppable(e.target.checked);
  };

  //   const handleChangeFileType = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  //     setFileType(e.target.value);
  //   };

  return <></>;
};
