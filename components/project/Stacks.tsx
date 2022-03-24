import styled from "styled-components";
import {
  Css3Icon,
  Html5Icon,
  JavascriptIcon,
  NodeIcon,
  ReactIcon,
  SassIcon,
} from "../icons";
import { FirebaseIcon } from "../icons/FirebaseIcon";
import { NextIcon } from "../icons/NextIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { StyledComponentIcon } from "../icons/StyledComponentIcon";

export const StackWrapper = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

type StackProps = {
  lang: string;
};

export const Stack = ({ lang }: StackProps) => {
  const showIcon = (icon: string) => {
    switch (icon) {
      case "HTML5":
        return <Html5Icon />;

      case "CSS3":
        return <Css3Icon />;

      case "SASS":
        return <SassIcon />;

      case "JS":
        return <JavascriptIcon />;

      case "React":
        return <ReactIcon />;

      case "Firebase":
        return <FirebaseIcon iconHeight="20px" iconWidth="20px" />;

      case "Redux":
        return <ReduxIcon iconHeight="20px" iconWidth="20px" />;

      case "NextJS":
        return <NextIcon />;

      case "Styled":
        return <StyledComponentIcon />;

      case "Node":
        return <NodeIcon />;

      default:
        return null;
    }
  };
  return <StackWrapper>{showIcon(lang)}</StackWrapper>;
};
