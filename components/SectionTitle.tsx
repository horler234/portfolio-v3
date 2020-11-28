import styled from "styled-components";

export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 49.31px;
  color: ${(props) => props.theme.colors.primary.green};
  margin-bottom: 31px;
  &:after {
    display: inline-block;
    content: "";
    width: 50px;
    height: 1px;
    background: ${(props) => props.theme.colors.primary.green};
    margin-left: 20px;
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 10px;
      line-height: 28.18px;
      &:after {
          width: 28.57px;
          margin-left: 10.43px;
          transform: translateY(-7px);
      }
  }
`;
