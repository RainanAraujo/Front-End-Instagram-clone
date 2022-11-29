import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 335px;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-right: 1px #d8d8d8 solid;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .logo {
    padding: 12px 8px;
    padding-top: 22px;
    img {
      width: 116px;
    }
  }
`;

export const MenuButton = styled.button`
  display: flex;
  margin: 16px 0;
  width: 100%;
  padding: 10px;
  font-size: 1.6rem;
  align-items: center;
  column-gap: 10px;
  background-color: transparent;
  border: none;
  appearance: none;
  border-radius: 30px;
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
    `}
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
    transition: 0.5s;
  }
`;

export const AvatarImage = styled.img`
  height: 28px;
`;
