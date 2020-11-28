import styled from "styled-components";
import Link from "next/link";
import { LogoIcon } from "./icons";

type LogoProps = {
  isShort?: boolean;
}

const LogoWrapper = styled.div<LogoProps>`
  margin-left: 7%;
  padding: 29px 0;
  margin-bottom: ${props => props.isShort ? "20px" : "80px"};

  @media (max-width: 540px) {
      margin-left: 10%;
      margin-bottom: 30px;
  }
`;

export const Logo = ({isShort}: LogoProps) => (
  <LogoWrapper isShort={isShort}>
    <Link href="/">
      <a>
        <LogoIcon iconWidth="126px" iconHeight="25.24px" />
      </a>
    </Link>
  </LogoWrapper>
);
