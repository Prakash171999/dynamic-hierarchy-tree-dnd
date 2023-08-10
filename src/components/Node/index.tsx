import React from "react";
import { Wrapper } from "./styles";

export const Node = ({ testIdPrefix = "", ...props }) => {
  const { id } = props.node;
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
            {/* <ArrowRightIcon data-testid={`arrow-right-icon-${id}`} /> */}
            {">"}
          </div>
        )}
        <div className={"label"}>
          {/* <Typography variant="body2">{props.node.text}</Typography> */}
          {props.node.text}
        </div>
      </div>
    </Wrapper>
  );
};
