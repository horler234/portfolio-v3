import styled from "styled-components";
import {
  Css3Icon,
  GithubIcon,
  Html5Icon,
  JavascriptIcon,
  LeftTagIcon,
  LiveIcon,
  RightTagIcon,
} from "../icons";
import Link from "next/link";

const ProjectWrapper = styled.div`
  background: #201f1f;
  padding: 40px 0 30px;
  width: 100%;
`;

const ProjectContent = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 768px){
    width: 85%;
  }
`;

export const ProjectTopFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagWrapper = styled.div`
  svg:first-child {
    margin-right: 14.65px;
  }
`;

export const ProjectLinkWrapper = styled.div`
  display: flex;
  a {
    span {
      display: block;
      margin-bottom: 5px;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    margin-left: 33px;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
  @media (max-width: 768px){
    a {
      margin-left: 20px;
      font-size: 8px;
    }
  }
`;

const ProjectDescription = styled.div`
  height: 150px;
  margin-top: 42px;
  h1 {
    margin: 0;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
    height: 100px;
    h1 {
      font-size: 18px;
      line-height: 21.13px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  svg {
    margin-right: 35px;
  }
  @media (max-width: 768px) {
    svg {
      margin-right: 20px;
    }
  }
`;

const ProjectGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectGrid = () => (
  <ProjectGridWrapper>
    <ProjectWrapper>
      <ProjectContent>
        <ProjectTopFlex>
          <TagWrapper>
            <LeftTagIcon iconWidth="16.6px" iconHeight="25.98px" />
            <RightTagIcon iconWidth="16.6px" iconHeight="25.98px" />
          </TagWrapper>

          <ProjectLinkWrapper>
            <Link href="/">
              <a>
                <span>
                  <GithubIcon iconHeight="17.5px" iconWidth="17.5px" />
                </span>
                Code
              </a>
            </Link>
            <Link href="/">
              <a>
                <span>
                  <LiveIcon />
                </span>
                Live
              </a>
            </Link>
          </ProjectLinkWrapper>
        </ProjectTopFlex>
        <ProjectDescription>
          <h1>Customer PayMe</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </p>
        </ProjectDescription>
        <StackWrapper>
          <Html5Icon />
          <Css3Icon />
          <JavascriptIcon />
        </StackWrapper>
      </ProjectContent>
    </ProjectWrapper>
    <ProjectWrapper>
      <ProjectContent>
        <ProjectTopFlex>
          <TagWrapper>
            <LeftTagIcon iconWidth="16.6px" iconHeight="25.98px" />
            <RightTagIcon iconWidth="16.6px" iconHeight="25.98px" />
          </TagWrapper>

          <ProjectLinkWrapper>
            <Link href="/">
              <a>
                <span>
                  <GithubIcon iconHeight="17.5px" iconWidth="17.5px" />
                </span>
                Code
              </a>
            </Link>
            <Link href="/">
              <a>
                <span>
                  <LiveIcon />
                </span>
                Live
              </a>
            </Link>
          </ProjectLinkWrapper>
        </ProjectTopFlex>
        <ProjectDescription>
          <h1>Customer PayMe</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </p>
        </ProjectDescription>
        <StackWrapper>
          <Html5Icon />
          <Css3Icon />
          <JavascriptIcon />
        </StackWrapper>
      </ProjectContent>
    </ProjectWrapper>
    <ProjectWrapper>
      <ProjectContent>
        <ProjectTopFlex>
          <TagWrapper>
            <LeftTagIcon iconWidth="16.6px" iconHeight="25.98px" />
            <RightTagIcon iconWidth="16.6px" iconHeight="25.98px" />
          </TagWrapper>

          <ProjectLinkWrapper>
            <Link href="/">
              <a>
                <span>
                  <GithubIcon iconHeight="17.5px" iconWidth="17.5px" />
                </span>
                Code
              </a>
            </Link>
            <Link href="/">
              <a>
                <span>
                  <LiveIcon />
                </span>
                Live
              </a>
            </Link>
          </ProjectLinkWrapper>
        </ProjectTopFlex>
        <ProjectDescription>
          <h1>Customer PayMe</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </p>
        </ProjectDescription>
        <StackWrapper>
          <Html5Icon />
          <Css3Icon />
          <JavascriptIcon />
        </StackWrapper>
      </ProjectContent>
    </ProjectWrapper>
    <ProjectWrapper>
      <ProjectContent>
        <ProjectTopFlex>
          <TagWrapper>
            <LeftTagIcon iconWidth="16.6px" iconHeight="25.98px" />
            <RightTagIcon iconWidth="16.6px" iconHeight="25.98px" />
          </TagWrapper>

          <ProjectLinkWrapper>
            <Link href="/">
              <a>
                <span>
                  <GithubIcon iconHeight="17.5px" iconWidth="17.5px" />
                </span>
                Code
              </a>
            </Link>
            <Link href="/">
              <a>
                <span>
                  <LiveIcon />
                </span>
                Live
              </a>
            </Link>
          </ProjectLinkWrapper>
        </ProjectTopFlex>
        <ProjectDescription>
          <h1>Customer PayMe</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </p>
        </ProjectDescription>
        <StackWrapper>
          <Html5Icon />
          <Css3Icon />
          <JavascriptIcon />
        </StackWrapper>
      </ProjectContent>
    </ProjectWrapper>
    <ProjectWrapper>
      <ProjectContent>
        <ProjectTopFlex>
          <TagWrapper>
            <LeftTagIcon iconWidth="16.6px" iconHeight="25.98px" />
            <RightTagIcon iconWidth="16.6px" iconHeight="25.98px" />
          </TagWrapper>

          <ProjectLinkWrapper>
            <Link href="/">
              <a>
                <span>
                  <GithubIcon iconHeight="17.5px" iconWidth="17.5px" />
                </span>
                Code
              </a>
            </Link>
            <Link href="/">
              <a>
                <span>
                  <LiveIcon />
                </span>
                Live
              </a>
            </Link>
          </ProjectLinkWrapper>
        </ProjectTopFlex>
        <ProjectDescription>
          <h1>Customer PayMe</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </p>
        </ProjectDescription>
        <StackWrapper>
          <Html5Icon />
          <Css3Icon />
          <JavascriptIcon />
        </StackWrapper>
      </ProjectContent>
    </ProjectWrapper>
  </ProjectGridWrapper>
);
