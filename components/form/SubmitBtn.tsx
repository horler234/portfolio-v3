import styled from "styled-components";

export const SubmitBtn = styled.div`
  input {
    padding-bottom: 10px;
    border: transparent;
    font-size: 18px;
    border-radius: 3px;
    font-family: inherit;
    background: #201f1f;
    color: #ffffff;
    padding: 13px 61px;
    font-weight: 600px;
    cursor: pointer;
    transition: background 0.6s ease;
    &:hover {
      background: ${(props) => props.theme.colors.primary.green};
    }
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    input {
      font-size: 12px;
      padding: 7.02px 32.93px;
    }
  }
`;
