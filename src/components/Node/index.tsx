/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Wrapper } from "./styles";
import {
  CaretRightOutlined,
  CaretDownOutlined,
  DeleteOutlined,
  CopyOutlined,
} from "@ant-design/icons";

export const Node = ({ ...props }) => {
  const [hover, setHover] = useState(false);
  const { onDelete, onCopy } = props;
  const { id } = props.node;
  const indent = props.depth * 20;

  const handleToggle = (e: any) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
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
        <div className={"label"}>{props.node.text}</div>
      </div>

      {hover && (
        <>
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
