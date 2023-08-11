import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { ButtonWrapper, Container } from "./styles";

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

  return (
    <Container>
      <Input placeholder="Enter title" style={{ width: 250 }} />
      <Select
        defaultValue="lucy"
        style={{ width: 250 }}
        //   onChange={handleChange}
        options={[
          { value: "root", label: "root" },
          { value: "item1", label: "item1" },
          { value: "item2", label: "item2" },
        ]}
      />

      <ButtonWrapper>
        <Button>Reset</Button>
        <Button type="primary" danger>
          Submit
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
