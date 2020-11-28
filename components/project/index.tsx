import styled from "styled-components";
import { GridIcon } from "../icons/GridIcon";
import { ListIcon } from "../icons/ListIcon";
import { SectionTitle } from "../SectionTitle";
import { useState, useEffect } from "react";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectList } from "./ProjectList";
import { SocialIcons, SocialIconsWrapper } from "../SocialIcons";

const ProjectContainer = styled.div`
  width: 90%;
  @media (max-width: 768px){
      width: 86.4%;
  }
`;

const ProjectContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  div {
    margin: 0;
  }
  div:last-child {
    display: flex;
    align-items: center;
    button {
      cursor: pointer;
      background: transparent;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
`;

export const SocialWrapper = styled(SocialIconsWrapper)`
    display: block;
`;

export const Project = () => {
  const [isGrid, setGrid] = useState(true);
  const changeView = () => {
    setGrid(!isGrid);
  };
  return (
    <ProjectContainer>
      <ProjectContainerFlex>
        <SectionTitle>Projects</SectionTitle>
        <div>
          <button onClick={changeView}>
            {isGrid ? <GridIcon /> : <ListIcon />}
          </button>
        </div>
      </ProjectContainerFlex>
      {isGrid ? <ProjectGrid /> : <ProjectList />}
    </ProjectContainer>
  );
};
