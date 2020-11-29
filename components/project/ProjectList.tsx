import {
  ProjectLinkWrapper,
  ProjectListDescription,
  ProjectListDescriptionWrapper,
  ProjectListFlex,
  ProjectListImageWrapper,
  ProjectTopFlex,
} from "./ProjectStyle";
import Link from "next/link";
import { GithubIcon, LiveIcon } from "../icons";
import { Stack } from "./Stacks";
import { ProjectContext } from "../../contexts/ProjectContext";
import { useContext } from "react";

export const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <>
      {projects.map((project) => (
        <ProjectListFlex key={project.name}>
          <ProjectListImageWrapper>
            <div>
              <img src={project.imgSrc} alt={project.name} />
            </div>
          </ProjectListImageWrapper>
          <ProjectListDescriptionWrapper>
            <ProjectListDescription>
              <ProjectTopFlex>
                <h1>{project.name}</h1>
                <ProjectLinkWrapper>
                  <Link href={project.source}>
                    <a>
                      <span>
                        <GithubIcon iconHeight="17.5px" iconWidth="17.5px" />
                      </span>
                      Code
                    </a>
                  </Link>
                  <Link href={project.live}>
                    <a>
                      <span>
                        <LiveIcon />
                      </span>
                      Live
                    </a>
                  </Link>
                </ProjectLinkWrapper>
              </ProjectTopFlex>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumyeirmod temporinvidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. vero eos et accusamet justo
              </p>
              {project.stack.map((icon) => (
                <Stack lang={icon} key={icon} />
              ))}
            </ProjectListDescription>
          </ProjectListDescriptionWrapper>
        </ProjectListFlex>
      ))}
    </>
  );
};
