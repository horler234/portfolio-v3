import styled from "styled-components";
import {
  Css3Icon,
  Html5Icon,
  JavascriptIcon,
  ReactIcon,
  SassIcon,
} from "../icons";

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

      default:
        return null;
    }
  };
  return <StackWrapper>{showIcon(lang)}</StackWrapper>;
};
