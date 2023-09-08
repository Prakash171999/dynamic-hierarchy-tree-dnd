/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Container, Wrapper } from "./styles";
import {
  CaretRightOutlined,
  CaretDownOutlined,
  DeleteOutlined,
  CopyOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

export const Node = ({ ...props }) => {
  const [hover, setHover] = useState(false);
  const { onDelete, onCopy } = props;
  const { id, text, isOpen, onToggle, on } = props.node;
  const indent = props.depth * 20;
  const [visibleInput, setVisibleInput] = useState(false);
  const [labelText, setLabelText] = useState(text);

  const handleToggle = (e: any) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const handleShowInput = () => {
    setVisibleInput(true);
  };

  const handleCancel = () => {
    setLabelText(text);
    setVisibleInput(false);
  };

  const handleChangeText = (e: any) => {
    setLabelText(e.target.value);
  };

  const handleSubmit = () => {
    setVisibleInput(false);
    props.onTextChange(id, labelText);
  };

  return (
    <Wrapper
      style={{ paddingInlineStart: indent }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={"container"}>
        {props.hasChild ? (
          <div className={"arrow"} onClick={handleToggle}>
            {!props?.isOpen ? <CaretRightOutlined /> : <CaretDownOutlined />}
          </div>
        ) : (
          <div className={"arrow"} onClick={handleToggle}>
            <img
              src="/assets/icons/bullet-point.png"
              alt="file-bullet"
              width={20}
              height={20}
            />
          </div>
        )}

        {visibleInput ? (
          <Container>
            <Input
              placeholder="Enter title"
              style={{ width: 250 }}
              onChange={handleChangeText}
              value={labelText}
            />
            <div className="confirm-icons">
              <CheckOutlined onClick={handleSubmit} />
              <CloseOutlined onClick={handleCancel} />
            </div>
          </Container>
        ) : (
          <div className={"label"}>{props.node.text}</div>
        )}
      </div>

      {hover && !visibleInput && (
        <>
          <div className={"actionButton"}>
            <EditOutlined onClick={() => handleShowInput()} alt="edit" />
          </div>
          <div className={"actionButton"}>
            <DeleteOutlined onClick={() => onDelete(id)} alt="delete" />
          </div>
          <div className={"actionButton"}>
            <CopyOutlined onClick={() => onCopy(id)} alt="copy" />
          </div>
        </>
      )}
    </Wrapper>
  );
};
