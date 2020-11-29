import { GridIcon } from "../icons/GridIcon";
import { ListIcon } from "../icons/ListIcon";
import { SectionTitle } from "../SectionTitle";
import { useState } from "react";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectList } from "./ProjectList";
import { ProjectContainer, ProjectContainerFlex } from "./ProjectStyle";

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
