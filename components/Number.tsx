import styled from "styled-components";
import { useRouter } from "next/router";
import { NavLinkProps } from "./navigation/NavigationStyle";
import Link from "next/link";

export const NumberList = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 86%;
  margin: auto;
  margin-bottom: 42px;
  display: flex;
  align-items: flex-end;
  height: 80px;
  li {
    margin-right: 34px;
  }
  li:last-child {
    margin-right: 0;
  }
  @media ${(props) => props.theme.media.tablet} {
    height: 117px;
    li {
      margin-right: 50px;
    }
  }
`;

const NumberListItem = styled.li<NavLinkProps>`
  ${(props) => props.isActive && `transform: translateY(20px);`}
  font-size: ${(props) => (props.isActive ? "68px" : "16px")};
  font-weight: ${(props) => (props.isActive ? "800" : "700")};
  transition: all 0.6s ease;
  a {
    text-decoration: none;
    color: #ffffff;
  }
  @media ${(props) => props.theme.media.tablet} {
    font-size: ${(props) => (props.isActive ? "100px" : "24px")};
  }
`;

export const Number = () => {
  const router = useRouter();
  const checkActive = (link: string) => router.pathname === link;
  return (
    <NumberList>
      <NumberListItem isActive={checkActive("/")}>
        <Link href="/" scroll={false}>
          <a>01</a>
        </Link>
      </NumberListItem>
      <NumberListItem isActive={checkActive("/about")}>
        <Link href="/about" scroll={false}>
          <a>02</a>
        </Link>
      </NumberListItem>
      <NumberListItem isActive={checkActive("/projects")}>
        <Link href="/projects" scroll={false}>
          <a>03</a>
        </Link>
      </NumberListItem>
      <NumberListItem isActive={checkActive("/contact")}>
        <Link href="/contact" scroll={false}>
          <a>04</a>
        </Link>
      </NumberListItem>
    </NumberList>
  );
};
