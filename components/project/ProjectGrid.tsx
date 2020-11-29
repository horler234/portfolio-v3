import {
  GithubIcon,
  LeftTagIcon,
  LiveIcon,
  RightTagIcon,
} from "../icons";
import Link from "next/link";
import { Stack } from "./Stacks";
import { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import {
  ProjectContent,
  ProjectDescription,
  ProjectGridWrapper,
  ProjectLinkWrapper,
  ProjectTopFlex,
  ProjectWrapper,
  TagWrapper,
} from "./ProjectStyle";

export const ProjectGrid = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <ProjectGridWrapper>
      {projects.map((project) => (
        <ProjectWrapper key={project.name}>
          <ProjectContent>
            <ProjectTopFlex>
              <TagWrapper>
                <LeftTagIcon iconWidth="16.6px" iconHeight="25.98px" />
                <RightTagIcon iconWidth="16.6px" iconHeight="25.98px" />
              </TagWrapper>

              <ProjectLinkWrapper>
                <Link href={project.source}>
                  <a target="_blank">
                    <span>
                      <GithubIcon iconHeight="17.5px" iconWidth="17.5px" />
                    </span>
                    Code
                  </a>
                </Link>
                <Link href={project.live}>
                  <a target="_blank">
                    <span>
                      <LiveIcon />
                    </span>
                    Live
                  </a>
                </Link>
              </ProjectLinkWrapper>
            </ProjectTopFlex>
            <ProjectDescription>
              <h1>{project.name}</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam.
              </p>
            </ProjectDescription>
            {project.stack.map((icon) => (
              <Stack lang={icon} key={icon} />
            ))}
          </ProjectContent>
        </ProjectWrapper>
      ))}
    </ProjectGridWrapper>
  );
};
