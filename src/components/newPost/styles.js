import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: #00000099;
  align-items: center;
  display: flex;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Header = styled.div`
  border-bottom: 1px solid #c8c8c8;
  width: 100%;
  display: flex;
  flex-shrink: 1;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .title {
    font-size: 1.6rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
  .next {
    color: #0095f6;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;

  right: 22px;
  top: 22px;
  svg {
    color: #fff;
  }
`;

export const SelectMedia = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  align-items: center;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
    span {
      color: #383838;
      font-size: 2.2rem;
      font-weight: 200;
    }
    .inputFile {
      input {
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
      margin-top: 12px;
      padding: 8px 12px;
      border-radius: 4px;
      background-color: #0095f6;
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
  height: 500px;
  align-items: center;
  flex-direction: column;
  transition: width 0.3s;
  .content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    img {
      width: 500px;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
    height: 100%;
    object-fit: cover;
  }

  .details {
    width: 300px;
    height: 100%;
    padding: 18px;
    .avatar {
      display: flex;
      align-items: center;
      column-gap: 8px;
      img {
        width: 32px;
        height: 32px;
      }
      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
    textarea {
      width: 100%;
      height: 300px;
      border: none;
      color: #383838;
      font-size: 1.6rem;
      font-family: "Segoe UI", sans-serif;
      margin-top: 12px;
      resize: none;
    }
    textarea:focus {
      outline: none;
    }
  }
`;
