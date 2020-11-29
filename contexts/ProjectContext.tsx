import { createContext } from "react";
import { ProjectContextType, projectList } from "../constants/projects";

type ContextProps = {
  children: JSX.Element;
};
export const ProjectContext = createContext<ProjectContextType>(projectList);

export const ProjectContextProvider = ({ children }: ContextProps) => {
  return (
    <ProjectContext.Provider value={projectList}>
      {children}
    </ProjectContext.Provider>
  );
};
