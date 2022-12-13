import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border: 1px solid #d1d1d1;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 14px;
  .header {
    padding: 12px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .profile {
      display: flex;
      align-items: center;
      column-gap: 8px;
      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
  }
  .content {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .actions {
    padding: 12px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    .left {
      display: flex;
      column-gap: 12px;
    }
    svg {
      &:hover {
        color: #a8a8a8;
      }
    }
  }
  .liked,
  .description,
  .comments,
  .date {
    padding: 4px 12px;
    font-size: 1.4rem;
    .strong {
      cursor: pointer;
    }
  }
  .comments {
    color: #a8a8a8;
  }
  .date {
    font-size: 1rem;
    color: #a1a1a1;
  }
  .description {
    overflow: hidden;
    max-height: 48px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .footer {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    border-top: 1px solid #f1f1f1;
    margin-top: 8px;
    input {
      width: 100%;
      border: none;
      outline: none;
      height: 24px;
      color: #a8a8a8;
    }
    .publish {
      color: #0095f6;
      font-size: 1.4rem;
    }
  }
`;
