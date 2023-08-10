/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Wrapper } from "./styles";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";

export const Node = ({ ...props }) => {
  const indent = props.depth * 20;

  const handleToggle = (e: any) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  return (
    <Wrapper style={{ paddingInlineStart: indent }}>
      <div className={"container"}>
        {props.hasChild ? (
          <div className={"arrow"} onClick={handleToggle}>
            <CaretRightOutlined />
          </div>
        ) : (
          <div className={"arrow"} onClick={handleToggle}>
            <img src="/assets/icons/bullet-point.png" alt="" width={20} height={20}/>
          </div>
        )}
        <div className={"label"}>{props.node.text}</div>
      </div>
    </Wrapper>
  );
};
