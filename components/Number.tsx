import styled from "styled-components";
import { useRouter } from "next/router";
import { NavLinkProps } from "./navigation/NavigationStyle";

export const NumberList = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 86%;
  margin: auto;
  margin-bottom: 42px;
  /* margin-top: 75px; */
  display: flex;
  align-items: flex-end;
  li {
    margin-right: 34px;
  }
  li:last-child {
    margin-right: 0;
  }
  @media ${(props) => props.theme.media.tablet} {
    li {
      margin-right: 50px;
    }
  }
`;

const NumberListItem = styled.li<NavLinkProps>`
  ${(props) => props.isActive && `transform: translateY(20px);`}
  font-size: ${(props) => (props.isActive ? "68px" : "16px")};
  font-weight: ${(props) => (props.isActive ? "800" : "700")};
  @media ${(props) => props.theme.media.tablet} {
    font-size: ${(props) => (props.isActive ? "100px" : "24px")};
  }
`;

export const Number = () => {
  const router = useRouter();
  const checkActive = (link: string) => router.pathname === link;
  return (
    <NumberList>
      <NumberListItem isActive={checkActive("/")}>01</NumberListItem>
      <NumberListItem isActive={checkActive("/about")}>02</NumberListItem>
      <NumberListItem isActive={checkActive("/projects")}>03</NumberListItem>
      <NumberListItem isActive={checkActive("/contact")}>04</NumberListItem>
    </NumberList>
  );
};
