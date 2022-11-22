import styled from "styled-components";

export const Container = styled.div`
  width: 244px;
  background-color: #fff;
  border-right: 1px #d8d8d8 solid;
  padding: 24px 16px;
  img {
    width: 130px;
  }
  .menuButton {
    display: flex;
    margin: 16px 0;
    width: 100%;
    padding: 8px;
    align-items: center;
    column-gap: 8px;
    background-color: transparent;
    border: none;
    border-radius: 30px;
    &:hover {
      background-color: #f8f8f8;
      transition: 0.5s;
    }
  }
`;
