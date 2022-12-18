import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${(props) => (props.size === "small" ? 42 : 62)}px;
  row-gap: 8px;
  cursor: pointer;
  span {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
  }
  .avatar {
    ${(props) =>
      !props.borderColorful &&
      css`
        background: radial-gradient(
          circle at 33% 100%,
          #fed373 4%,
          #f15245 30%,
          #d92e7f 62%,
          #9b36b7 85%,
          #515ecf
        );
      `}

    border-radius: 100%;
    width: ${(props) => (props.size === "small" ? 38 : 58)}px;
    height: ${(props) => (props.size === "small" ? 38 : 58)}px;

    padding: 2px;

    img {
      background-color: white;
      padding: 2px;
      border-radius: 100%;
      width: 100%;
    }
  }
`;
