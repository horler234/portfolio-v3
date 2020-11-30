import Link from "next/link";
import styled from "styled-components";
import { BodyText } from "./text/BodyText";
import { H1 } from "./text/H1";

const HomeDescription = styled.div`
  width: 41%;
  a {
    text-decoration: none;
    button {
      color: #ffffff;
      margin-top: 20.68px;
      border-radius: 3px;
      background: transparent;
      border: 2px solid ${(props) => props.theme.colors.primary.green};
      transition: background 0.6s ease;
      padding: 7px 32.87px;
      font-weight: 600;
      font-size: 10px;
      line-height: 11.74px;
      cursor: pointer;
      font-family: inherit;
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: ${(props) => props.theme.colors.primary.green};
      }
    }
  }
  h1 {
    font-weight: 800;
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 46.81px;
  }
  span {
    font-weight: 500;
  }
  @media (max-width: 768px) {
    width: 86.4%;
    order: 1;
    margin-bottom: 130px;
    span:first-child {
      font-size: 12.93px;
      font-weight: 500;
      line-height: 15.18px;
    }
  }
  @media ${(props) => props.theme.media.tablet} {
    h1 {
      font-size: 74px;
      margin-top: 10px;
      line-height: 86.88px;
      margin-bottom: 30px;
    }
    a {
      button {
        margin-top: 63px;
        padding: 13px 61px;
        font-size: 18px;
        line-height: 21.13px;
      }
    }
  }

  @media ${(props) => props.theme.media.laptop} {
    h1 {
      font-size: 60px;
    }
  }
`;

export const HomeWrapper = () => (
  <HomeDescription>
    <H1 isGreen>Hi, meet</H1>
    <h1>Abdulmuqit Shuaib</h1>
    <BodyText maxWidth="100%">
      I'm a self-taught frontend developer from Lagos, Nigeria. I am currently
      an undergraduate studying Civil & Environmental Engineering in the
      University of Lagos, Akoka.
    </BodyText>
    <Link href="mailto:shuaibabdulmuqit@gmail.com">
      <a target="_blank">
        <button>Get In Touch</button>
      </a>
    </Link>
  </HomeDescription>
);
