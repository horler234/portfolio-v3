import styled from "styled-components";

/**
 * PROJECT CONTAINER STYLE
 */
export const ProjectContainer = styled.div`
  width: 90%;
  @media (max-width: 768px) {
    width: 86.4%;
  }
`;

export const ProjectContainerFlex = styled.div`
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

/**
 * TOP SECTION OF BOTH GRID AND LIST
 */
export const ProjectTopFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * PROJECT GRID STYLE
 */

export const ProjectWrapper = styled.div`
  background: #201f1f;
  padding: 40px 0 30px;
  width: 100%;
  transition: all 0.6s ease;
  &:hover {
    -webkit-box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const ProjectContent = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const TagWrapper = styled.div`
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
  @media (max-width: 768px) {
    a {
      margin-left: 20px;
      font-size: 8px;
    }
  }
`;

export const ProjectDescription = styled.div`
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

export const ProjectGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * PROJECT LIST STYLE
 */

export const ProjectListFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
  transition: all 1s ease;
  &:hover {
    -webkit-box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 27px 0px rgba(0, 0, 0, 0.75);
    img {
      transform: scale(1.02) rotate(5deg);
    }
  }
`;

export const ProjectListImageWrapper = styled.div`
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
    img {
      width: 100%;
      transition: all 1s ease;
      display: block;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    padding: 20px 0;
    div {
      width: 90%;
    }
  }
`;

export const ProjectListDescriptionWrapper = styled.div`
  width: 50%;
  background: #201f1f;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 20px 0;
  }
`;

export const ProjectListDescription = styled.div`
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
  @media (max-width: 768px) {
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
