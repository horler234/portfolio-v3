import styled from "styled-components";

/**
 * Hamburger Icon toggles the mobile navbar on click
 * @todo add the toggle function
 * @todo add the transition to the toggle function (preferably using react-transition library)
 */

export const Close = styled.button`
  width: 22.47px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 22.47px;
    height: 2px;
    background: ${(props) => props.theme.colors.primary.white};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
  }

  div:first-child {
    transform: rotate(45deg);
  }
  div:nth-child(2) {
    transform: rotate(-45deg);
    margin-top: -2px;
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 30px;
    div {
      width: 30px;
    }
  }
`;
