import styled from "styled-components";
import Link from "next/link";
import { DownloadIcon } from "./icons";

const SkillSetWrapper = styled.div`
  margin-top: 50px;
  width: 80%;
  a {
    text-decoration: none;
    button {
      color: ${(props) => props.theme.colors.primary.black};
      margin-top: 10px;
      background: ${(props) => props.theme.colors.primary.green};
      transition: background 0.6s ease;
      padding: 13px 61px;
      font-weight: 600;
      font-size: 18px;
      border: transparent;
      line-height: 21.13px;
      cursor: pointer;
      font-family: inherit;
      border-radius: 3px;
      span {
        margin-right: 11px;
      }
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: ${(props) => props.theme.colors.primary.white};
      }
    }

    @media (max-width: 768px) {
      button {
        padding: 7px 32px;
        font-size: 12px;
        span svg {
          width: 7.53px;
          height: 7.05px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkillSetTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const SkillSetList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0;

  li {
    /* margin-right: 90px; */
    width: 50%;
    margin-bottom: 20px;
    &:before {
      content: "";
      display: inline-block;
      margin-right: 16px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.colors.primary.green};
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    li {
      margin-bottom: 16.38px;
    }
  }
`;

export const Skillset = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "SASS",
    "Bootstrap",
    "TailwindCSS",
    "MaterializeCSS",
    "ReactJS",
    "NextJS",
    "Styled Components",
    "Typescript",
    "GraphQL",
    "React Native",
    "Flutter",
    "NodeJS",
    "Express",
    "MongoDB",
    "Solidity",
  ];
  return (
    <SkillSetWrapper>
      <SkillSetTitle>My Skillsets</SkillSetTitle>
      <SkillSetList>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </SkillSetList>
      <Link href="https://drive.google.com/file/d/12OI7GlwiIAJkMcvJAGEfl9ICZ1EJ2zqm/view?usp=sharing">
        <a target="_blank">
          <button>
            <span>
              <DownloadIcon iconColor="#000000" />
            </span>
            Download CV
          </button>
        </a>
      </Link>
    </SkillSetWrapper>
  );
};
