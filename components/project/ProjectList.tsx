import styled from "styled-components";
import {
  ProjectLinkWrapper,
  ProjectTopFlex,
  StackWrapper,
} from "./ProjectGrid";
import Link from "next/link";
import {
  Css3Icon,
  GithubIcon,
  Html5Icon,
  JavascriptIcon,
  LiveIcon,
} from "../icons";

const ProjectListFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ProjectListImageWrapper = styled.div`
  width: 50%;
  background: url("/images/project-background.png");
  background-repeat: no-repeat;
  padding: 30px 0;
  background-size: cover;

  div {
    width: 80%;
    margin: auto;
    -webkit-box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    background: #ffffff;
    img {
      width: 100%;
      display: block;
    }
  }

  @media (max-width: 768px) {
      width: 100%;
      padding: 20px 0;
      div {
          width: 90%;
      }
  }
`;

const ProjectListDescriptionWrapper = styled.div`
  width: 50%;
  background: #201f1f;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
      width: 100%;
      padding: 20px 0;
  }
`;

const ProjectListDescription = styled.div`
  width: 72%;
  margin-left: 9%;
  h1 {
    font-size: 28px;
    line-height: 32.87px;
  }

  p {
    margin: 20px 0;
    text-align: justify;
  }
  @media (max-width: 768px){
      width: 90%;
      margin: auto;
      h1 {
          font-size: 18px;
          line-height: 21.13px;
      }
      p {
          font-size: 10px;
          line-height: 11.74px;
      }
  }
`;

export const ProjectList = () => (
  <>
    <ProjectListFlex>
      <ProjectListImageWrapper>
        <div>
          <img src="/images/alison.JPG" alt="Alison" />
        </div>
      </ProjectListImageWrapper>
      <ProjectListDescriptionWrapper>
        <ProjectListDescription>
          <ProjectTopFlex>
            <h1>Customer PayMe</h1>
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
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. vero eos et accusamet justo
          </p>
          <StackWrapper>
            <Html5Icon />
            <Css3Icon />
            <JavascriptIcon />
          </StackWrapper>
        </ProjectListDescription>
      </ProjectListDescriptionWrapper>
    </ProjectListFlex>
    <ProjectListFlex>
      <ProjectListImageWrapper>
        <div>
          <img src="/images/alison.JPG" alt="Alison" />
        </div>
      </ProjectListImageWrapper>
      <ProjectListDescriptionWrapper>
        <ProjectListDescription>
          <ProjectTopFlex>
            <h1>Customer PayMe</h1>
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
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. vero eos et accusamet justo
          </p>
          <StackWrapper>
            <Html5Icon />
            <Css3Icon />
            <JavascriptIcon />
          </StackWrapper>
        </ProjectListDescription>
      </ProjectListDescriptionWrapper>
    </ProjectListFlex>
    <ProjectListFlex>
      <ProjectListImageWrapper>
        <div>
          <img src="/images/alison.JPG" alt="Alison" />
        </div>
      </ProjectListImageWrapper>
      <ProjectListDescriptionWrapper>
        <ProjectListDescription>
          <ProjectTopFlex>
            <h1>Customer PayMe</h1>
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
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. vero eos et accusamet justo
          </p>
          <StackWrapper>
            <Html5Icon />
            <Css3Icon />
            <JavascriptIcon />
          </StackWrapper>
        </ProjectListDescription>
      </ProjectListDescriptionWrapper>
    </ProjectListFlex>
    <ProjectListFlex>
      <ProjectListImageWrapper>
        <div>
          <img src="/images/alison.JPG" alt="Alison" />
        </div>
      </ProjectListImageWrapper>
      <ProjectListDescriptionWrapper>
        <ProjectListDescription>
          <ProjectTopFlex>
            <h1>Customer PayMe</h1>
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
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. vero eos et accusamet justo
          </p>
          <StackWrapper>
            <Html5Icon />
            <Css3Icon />
            <JavascriptIcon />
          </StackWrapper>
        </ProjectListDescription>
      </ProjectListDescriptionWrapper>
    </ProjectListFlex>
    <ProjectListFlex>
      <ProjectListImageWrapper>
        <div>
          <img src="/images/alison.JPG" alt="Alison" />
        </div>
      </ProjectListImageWrapper>
      <ProjectListDescriptionWrapper>
        <ProjectListDescription>
          <ProjectTopFlex>
            <h1>Customer PayMe</h1>
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
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. vero eos et accusamet justo
          </p>
          <StackWrapper>
            <Html5Icon />
            <Css3Icon />
            <JavascriptIcon />
          </StackWrapper>
        </ProjectListDescription>
      </ProjectListDescriptionWrapper>
    </ProjectListFlex>
  </>
);
