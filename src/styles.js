import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;

  flex-direction: row;

  .content {
    width: 470px;
    margin-right: 24px;
  }

  .wrapperContent {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
  .sidebar {
    width: 335px;
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
