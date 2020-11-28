import styled from "styled-components";

export const ImageSquareWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    order: 2;
    width: 86.4%;
  }
`;

export const ImageSquare = styled.div`
  @media ${(props) => props.theme.media.mobileS} {
    width: 100%;
    height: 205px;
    border: 2px solid #ffffff;
    img {
      width: 100%;
      transform: translateY(-86px) scaleX(-1);
    }
  }

  @media (min-width: 360px) {
    height: 240.26px;
  }

  @media ${(props) => props.theme.media.mobileM} {
    height: 254px;
  }
  @media ${(props) => props.theme.media.mobileL} {
    height: 286px;
  }

  @media (min-width: 414px) {
    height: 289px;
  }
  @media (min-width: 540px) {
    height: 404px;
  }
  @media (min-width: 600px) {
    height: 420px;
  }

  @media ${(props) => props.theme.media.tablet} {
    /* width: 330px; */
    height: 666.24px;
    img {
      transform: translateY(-84px) scaleX(-1);
    }
  }

  @media ${(props) => props.theme.media.laptop} {
    width: 400.62px;
    height: 400.24px;
    img {
      transform: translateY(-125px) scaleX(-1);
    }
  }
`;
