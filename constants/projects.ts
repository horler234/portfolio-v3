export interface ProjectType {
  name: string;
  stack: string[];
  live: string;
  source: string;
  imgSrc: string;
  longDescription?: string;
  shortDescription?: string;
}

export interface ProjectContextType {
  projects: ProjectType[];
}
export const projectList: ProjectContextType = {
  projects: [
    {
      name: "Portfolio",
      stack: ["NextJS", "React", "Styled"],
      live: "/",
      source: "https://github.com/horler234/portfolio-v4",
      imgSrc: "/images/portfolio.JPG",
      shortDescription: "A platform for showcasing some of the stuff I do and what I am capable of.",
      longDescription: "Built with the lightest and best methods for the best user experience, this is my portfolio web application to showcase my strengths in web development."
    },
    {
      name: "MarioPlan",
      stack: ["React", "CSS3", "Redux", "Firebase"],
      live: "https://netninja-marioplan-50992.firebaseapp.com/",
      source: "https://github.com/horler234/marioplan",
      imgSrc: "/images/marioplan.JPG",
      longDescription:
        "MarioPlan is a full stack react application with firebase as the backend and the authentication provider. It is a web app to track game (mario) tasks and update your progress.",
      shortDescription: "MarioPlan is a web application to track game tasks.",
    },
    {
      name: "Pocketimes",
      stack: ["React", "CSS3", "Redux"],
      live: "https://pocketimes-2b82b.web.app/",
      source: "https://github.com/horler234/pocketimes",
      imgSrc: "/images/pocketimes.JPG",
      longDescription:
        "Pocketimes is a simple react blog application. I developed it as a practice project when I was first introduced to ReactJS framework and Redux store.",
      shortDescription: "Pocketimes is a simple react blog application.",
    },
    {
      name: "Alison Portfolio",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://alison-codelord.netlify.app/",
      source: "https://github.com/horler234/marioplan",
      imgSrc: "/images/alison.JPG",
      shortDescription: "Practice portfolio project for a photographer.",
      longDescription:
        "This project is to test my design implementation. The UI was designed by my friend Alaba (twitter: @Alaba_art). It also has some cool hover animations, a custom preloader and light and dark theme.",
    },
    {
      name: "Country Info",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live:
        "https://horler234.github.io/Day-Twenty-Eight/day%20twenty-eight/index.html/",
      source: "https://github.com/horler234/Day-Twenty-Eight",
      imgSrc: "/images/countries.JPG",
      shortDescription:
        "A web application displaying information on countries.",
      longDescription:
        "Having a filter component to search for countries, Country Info is a web application mainly for information about some countries. It also a light and dark mode toggle.",
    },
    {
      name: "30DaysOfCode Web App",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://horler234.github.io/last-straw/last%20straw/home.html",
      source: "https://github.com/horler234/last-straw",
      imgSrc: "/images/last.JPG",
      longDescription:
        "As part of Engineering Career Expo's (ECX) tasks, I developed a 4-page website consisting of login, signup, dashboard and task page. It is a frontend web application so the backend features are not available.",
      shortDescription: "A frontend web application for ECX 30Days of Code",
    },
    {
      name: "Anime Quiz",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live:
        "https://horler234.github.io/Day-Twenty-Six/day%20twenty-six/index.html",
      source: "https://github.com/horler234/Day-Twenty-Six",
      imgSrc: "/images/anime.JPG",
      longDescription:
        "As an anime freak, I decided to create a web application that asks anime trivia based on my favorite series. Built with vanilla javascript, Anime Quiz is a simple web application.",
      shortDescription:
        "A web application that tests your knowledge of anime series. Why not?",
    },
    {
      name: "Enchanteur",
      stack: ["HTML5", "CSS3", "SASS", "JS"],
      live: "https://enchanteur.netlify.app/",
      source: "https://github.com/horler234/enchanteur",
      imgSrc: "/images/enchanteur.JPG",
      shortDescription: "Landing page for a hotel.",
      longDescription:
        "A hotel landing page built with HTML, CSS and Javascript. It has a cool preloader and the website behaviour is smooth.",
    },
    {
      name: "EPL19 Club Info",
      stack: ["HTML5", "CSS3", "JS"],
      live: "https://epl-19.netlify.app/",
      source: "https://github.com/horler234/epl-info",
      imgSrc: "/images/epl.JPG",
      shortDescription:
        "Some little details about the teams in EPL18/19 season.",
      longDescription: "To practice my API consumption skills, I developed a single page app for football fans like me. It basically fetches for details about teams that played in EPL18/19 season.",
    },
  ],
};
