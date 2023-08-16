import { Button, Input, Select, notification } from "antd";
import React, { useEffect, useState } from "react";
import { ButtonWrapper, Container } from "./styles";

interface IProps {
  onSubmit: (node: object) => void;
  tree: any;
}

export const AddItemForm: React.FC<IProps> = ({ onSubmit, tree }) => {
  const [text, setText] = useState("");
  const [parent, setParent] = useState(0);
  const [parentOptions, setParentOptions] = useState([] as any);

  useEffect(() => {
    const parentRoots = tree
      .filter((node: any) => node.droppable === true)
      .map((node: any) => ({
        label: node.text,
        value: node.id,
      }));

    setParentOptions([{ label: "root", value: 0 }, ...parentRoots]);
  }, [tree]);

  const handleChangeText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText("");
  };

  const handleChangeParent = (value: any) => {
    setParent(Number(value));
  };

  return (
    <Container>
      <Input
        placeholder="Enter title"
        style={{ width: 250 }}
        onChange={handleChangeText}
        value={text}
      />
      <Select
        style={{ width: 250 }}
        onChange={handleChangeParent}
        options={parentOptions}
        defaultValue={"root"}
      />

      <ButtonWrapper>
        <Button onClick={handleReset}>Reset</Button>
        <Button
          type="primary"
          danger
          onClick={() =>
            text != ""
              ? onSubmit({
                  text,
                  parent,
                })
              : notification.open({
                  message: "Error",
                  description: "Please enter a title.",
                })
          }
        >
          Submit
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
