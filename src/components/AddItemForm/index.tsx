import { Button, Input, Select } from "antd";
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

    setParentOptions(parentRoots);
  }, [tree]);

  const handleChangeText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
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
      />
      <Select
        style={{ width: 250 }}
        onChange={handleChangeParent}
        options={parentOptions}
      />

      <ButtonWrapper>
        <Button>Reset</Button>
        <Button
          type="primary"
          danger
          onClick={() =>
            onSubmit({
              text,
              parent,
            })
          }
        >
          Submit
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
