import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: inline-flex;
  height: 32px;
  display: flex;
  flex-direction: row;

  .container {
    padding-inline-start: 8px;
    display: flex;
  }

  .arrow {
    cursor: pointer;
    /* display: flex; */
    /* left: -10px;
    position: absolute; */
    /* top: 50%; */

    svg:focus {
      transform: rotate(90deg) !important;
    }
  }
`;
