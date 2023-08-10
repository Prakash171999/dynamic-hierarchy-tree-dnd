import React from "react";
import { Wrapper } from "./styles";

export const Node = ({ testIdPrefix = "", ...props }) => {
  const indent = props.depth * 16;

  const handleToggle = (e: any) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  return (
    <Wrapper style={{ paddingInlineStart: indent }}>
      <div className={"conatiner"}>
        {props.hasChild && (
          <div className={"arrow"} onClick={handleToggle}>
            {">"}
          </div>
        )}
        <div className={"label"}>
          {props.node.text}
        </div>
      </div>
    </Wrapper>
  );
};
