import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 86%;
  max-width: 1250px;
  align-items: center;
  margin: auto;
  div {
    /* margin-left: 0; */
  }

  @media (max-width: 540px) {
    width: 80%;
  }
`;
