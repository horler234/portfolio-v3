import styled from "styled-components";

export const TextArea = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  textarea {
    font-size: 14px;
    font-family: inherit;
    background: transparent;
    border: 1px solid #4f4f4f;
    color: #ffffff;
    width: 100%;
    height: 150px;
    resize: none;
    border-radius: 3px;
    padding: 10px;
    line-height: 16.44px;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 768px) {
    margin-top: 16px;
    margin-bottom: 27px;
    textarea {
      font-size: 12px;
      padding: 5px;
      height: 150px;
    }
  }
`;
