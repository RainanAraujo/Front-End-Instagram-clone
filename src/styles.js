import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;

  flex-direction: row;

  .mainContent {
    width: 470px;
    margin-right: 24px;
  }

  .wrapperContent {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .stories {
    width: 100%;
    overflow: hidden;
    background-color: white;
    border-radius: 8px;
    display: flex;
    column-gap: 12px;
    padding: 16px;
    margin-bottom: 16px;
    border: 1px solid #d1d1d1;
  }
`;

export const Sidebar = styled.div`
  width: 335px;
  padding: 18px 8px;
  .user {
    display: flex;
    align-items: center;
    column-gap: 16px;
    img {
      width: 58px;
    }
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      .nameID {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 2px;
      }
      .name {
        font-size: 1.4rem;
        color: #8e8e8e;
      }
    }
    button {
      color: #0095f6;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .suggestions {
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    .title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #8e8e8e;
      display: flex;
      justify-content: space-between;
    }
  }
  .suggestion {
    display: flex;
    align-items: center;
    column-gap: 12px;
    img {
      width: 32px;
    }
    .info {
      width: 100%;
      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
    button {
      color: #0095f6;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  footer {
    width: 100%;
    display: flex;

    flex-direction: column;
    row-gap: 16px;
    nav {
      display: flex;
      li {
        display: inline-block;
        margin: 2px 0;
      }
      li + li {
        a {
          &::after {
            content: "·";
            margin: 0 4px;
          }
        }
      }
    }

    a {
      text-transform: none;
      text-decoration: none;
      color: #d1d1d1;
      font-size: 1.2rem;
      span {
        display: inline !important;
      }
    }
    .copy {
      color: #d1d1d1;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
