import styled from "styled-components";
import Link from "next/link";
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icons";

type SocialProps = {
  notCentered?: boolean;
}

export const SocialIconsWrapper = styled.div<SocialProps>`
  display: ${props => props.notCentered ? "block" : "flex"};
  ${props => props.notCentered && `padding-top: 200px;`}
  align-items: center;
  order: 3;
  ul {
    list-style: none;
    padding: 0;

    li {
      padding-bottom: 26px;
    }

    li:last-child {
      padding-bottom: 0;
    }
  }

  @media ${(props) => props.theme.media.tablet} {
    ul {
      li {
        padding-bottom: 31px;
        a svg {
          transform: rotate(0);
          transition: transform 1s ease;
          &:hover {
            transform: rotate(359deg);
          }
        }
      }
    }
  }
`;

export const SocialIcons = ({notCentered}: SocialProps) => (
  <SocialIconsWrapper notCentered={notCentered}>
    <ul>
      <li>
        <Link href="https://github.com/horler234">
          <a target="_blank">
            <GithubIcon iconWidth="14px" iconHeight="14px" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/codelord_abdulmuqit/">
          <a target="_blank">
            <InstagramIcon iconWidth="15.82px" iconHeight="15.82px" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://linkedin.com/in/abdulmuqit-shuaib-98a9031b5">
          <a target="_blank">
            <LinkedinIcon iconWidth="14px" iconHeight="14px" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/shuaibabdmuqit">
          <a target="_blank">
            <TwitterIcon iconWidth="14px" iconHeight="14px" />
          </a>
        </Link>
      </li>
    </ul>
  </SocialIconsWrapper>
);
