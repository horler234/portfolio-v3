import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import {
  CloseWrapper,
  NavigationListWrapper,
  NavigationWrapper,
  NavListItem,
} from "./NavigationStyle";
import { Close } from "./CloseIcon";
import { Hamburger } from "./HamburgerIcon";

export const Navigation = () => {
  const [isShowing, setShowing] = useState(false);
  const toggleNavbar = (): void => {
    setShowing(!isShowing);
  };
  const router = useRouter();
  const checkActive = (link: string) => router.pathname === link;
  return (
    <div>
      <Hamburger name="Open Navigation" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavigationWrapper isOpen={isShowing}>
        <CloseWrapper>
          <Close name="Close Navigation" onClick={toggleNavbar}>
            <div></div>
            <div></div>
          </Close>
        </CloseWrapper>
        <NavigationListWrapper>
          <ul>
            <NavListItem isActive={checkActive("/")}>
              <Link href="/">
                <a onClick={() => setShowing(false)}>
                  <span>01</span> Home
                </a>
              </Link>
            </NavListItem>
            <NavListItem isActive={checkActive("/about")}>
              <Link href="/about">
                <a onClick={() => setShowing(false)}>
                  <span>02</span> About Me
                </a>
              </Link>
            </NavListItem>
            <NavListItem isActive={checkActive("/projects")}>
              <Link href="/projects">
                <a onClick={() => setShowing(false)}>
                  <span>03</span> Projects
                </a>
              </Link>
            </NavListItem>
            <NavListItem isActive={checkActive("/contact")}>
              <Link href="/contact">
                <a onClick={() => setShowing(false)}>
                  <span>04</span> Contact Me
                </a>
              </Link>
            </NavListItem>
          </ul>
        </NavigationListWrapper>
      </NavigationWrapper>
    </div>
  );
};
