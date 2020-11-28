import styled from "styled-components";

/**
 * Hamburger Icon toggles the mobile navbar on click
 * @todo add the toggle function
 * @todo add the transition to the toggle function (preferably using react-transition library)
 */

export const Hamburger = styled.button`
  /* display: block; */
  position: absolute;
  top: 30px;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 22.5px;
  height: 16.5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    height: 2px;
    background: ${(props) => props.theme.colors.primary.white};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    /* transform-origin: 1px; */
  }

  div:first-child {
    width: 18.75px;
  }
  div:nth-child(2) {
    width: 22.5px;
  }
  div:nth-child(3) {
    width: 15px;
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 30px;
    height: 20px;
    right: 7%;
    div:first-child {
      width: 25px;
    }
    div:nth-child(2) {
      width: 30px;
    }
    div:nth-child(3) {
      width: 20px;
    }
  }
`;