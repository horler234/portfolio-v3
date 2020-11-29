export interface ProjectType {
    name: string;
    stack: string[];
    live: string;
    source: string;
    imgSrc: string;
  }
  
  export interface ProjectContextType {
      projects: ProjectType[];
  }
  export const projectList: ProjectContextType = {
      projects: [
    {
      name: "MarioPlan",
      stack: ["CSS3", "React", "Redux", "Firebase"],
      live: "https://netninja-marioplan-50992.firebaseapp.com/",
      source: "https://github.com/horler234/alison",
      imgSrc: "/images/marioplan.JPG"
    },
    {
      name: "Alison Portfolio",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://alison-codelord.netlify.app/",
      source: "https://github.com/horler234/marioplan",
      imgSrc: "/images/alison.JPG"
    },
    {
      name: "Country Info",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://horler234.github.io/Day-Twenty-Eight/day%20twenty-eight/index.html/",
      source: "https://github.com/horler234/Day-Twenty-Eight",
      imgSrc: "/images/countries.JPG"
    },
    {
      name: "30DaysOfCode Web App",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://horler234.github.io/last-straw/last%20straw/home.html",
      source: "https://github.com/horler234/last-straw",
      imgSrc: "/images/last.JPG"
    },
    {
      name: "Anime Quiz",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://horler234.github.io/Day-Twenty-Six/day%20twenty-six/index.html",
      source: "https://github.com/horler234/Day-Twenty-Six",
      imgSrc: "/images/anime.JPG"
    },
    {
      name: "Enchanteur",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://enchanteur.netlify.app/",
      source: "https://github.com/horler234/enchanteur",
      imgSrc: "/images/enchanteur.JPG"
    },
  ]};