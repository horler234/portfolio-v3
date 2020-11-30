import styled from "styled-components";
import { ShowNavbar } from "../keyframes/ShowNavbar";

export type NavLinkProps = {
  isActive?: boolean;
};

type NavbarProps = {
  isOpen: boolean;
};

// export const NavLayout = styled.div`

// `;

export const NavigationWrapper = styled.div<NavbarProps>`
  position: fixed;
  top: 0;
  right: 0;
  background: ${(props) => props.theme.colors.primary.black};
  height: ${(props) => (props.isOpen ? "100vh" : "0")};
  width: ${(props) => (props.isOpen ? "100vw" : "0")};
  z-index: 5;
  overflow: hidden;
  animation: ${(props) => (props.isOpen ? ShowNavbar : ShowNavbar)}2s ease;
  border-radius: ${(props) => (props.isOpen ? "0" : "500px")};
  transition: all .6s ease;
  ul {
    list-style: none;
    padding: 0;
  }
  @media ${(props) => props.theme.media.mobileL} {
    /* width: 313px; */
  }

  @media ${(props) => props.theme.media.tablet} {
    /* width: 456px; */
    ul {
      /* padding-left: 100px; */
    }
  }
`;
export const NavListItem = styled.li<NavLinkProps>`
  font-size: 21.7px;
  margin-bottom: 46.5px;
  transition: all .6s ease;
  &:hover {
    transform: rotate(-10deg);
  }
  a {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.primary.green
        : props.theme.colors.primary.white};
    text-decoration: none;
    span {
      margin-right: 23.25px;
    }
  }

  @media ${(props) => props.theme.media.tablet} {
    font-size: 28px;
    margin-bottom: 60px;
    a {
      span {
        margin-right: 60px;
      }
    }
  }
`;

export const NavigationListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CloseWrapper = styled.div`
  text-align: right;
  padding-top: 20px;
  padding-right: 10%;
  margin-bottom: 100px;
  @media ${(props) => props.theme.media.tablet} {
    padding: 30px 7% 0 0;
  }
`;
