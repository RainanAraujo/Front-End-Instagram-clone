import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;

  .content {
  }
  .feed {
    width: 500px;
    height: 400px;
    background-color: white;
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
`;
