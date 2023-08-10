import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: inline-flex;
  height: 32px;

  .container {
    padding-inline-start: 8px;
    position: relative;
  }

  .arrow {
    cursor: pointer;
    display: flex;
    left: -16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
