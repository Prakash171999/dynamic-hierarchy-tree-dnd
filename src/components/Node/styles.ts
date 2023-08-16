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

  .actionButton {
    padding: 0 4px;

    svg {
      margin-left: 20px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .confirm-icons {
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    cursor: pointer;
  }
`;
