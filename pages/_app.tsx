import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppTheme } from "../theme/AppTheme";
import { NextComponentType, NextPageContext } from "next";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { useRouter } from "next/router";
import { Number } from "../components/Number";
import { AnimatePresence } from "framer-motion";

/**
 * Custom Next.js App
 *
 * The App component is used to initialize pages,
 * it is the top level parent to all components.
 *
 * It is used to
 *  - inject global CSS for the html and body tags
 *  - pass the Theme to all styled-components
 *  - keep state between page navigation on the client
 */

type MyThemeType = typeof AppTheme;

export interface ThemeWrapper {
  theme: MyThemeType;
}

/**
 * GlobalStyle: injects global CSS
 */
const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.primary.black};
    color: #FFFFFF;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

interface MyAppProps extends App {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const router = useRouter();
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Logo
        isShort={
          router.pathname === "/contact" ||
          router.pathname === "/about" ||
          router.pathname === "/projects"
        }
      />
      <Navigation />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
      <Number />
    </ThemeProvider>
  );
};

export default MyApp;
