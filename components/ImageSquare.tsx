import styled from "styled-components";

export const ImageSquareWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    transform: translateY(-2px) scaleX(-1);
  }

  @media (max-width: 1000px) {
    width: 70%;
    order: 2;
  }
  @media (max-width: 768px) {
    width: 86.4%;
  }
`;

export const ImageSquare = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border: 2px solid #ffffff;
  width: 100%;
  height: 205px;

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
    height: 280px;
  }
  @media (min-width: 540px) {
    height: 404px;
  }
  @media (min-width: 600px) {
    height: 420px;
  }

  @media ${(props) => props.theme.media.laptop} {
    width: 400.62px;
    height: 400.24px;
  }
`;
