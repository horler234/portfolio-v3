import styled from "styled-components";

type DisplayAtMediaProps = {
  mobile?: boolean;
  tablet?: boolean;
  laptop?: boolean;
  desktop?: boolean;
};

/**
 * Displays children only at specified screen sizes (width).
 * You can specify multiple sizes.
 *
 * @param {boolean} mobile Displays children on mobile screen sizes
 * @param {boolean} tablet Displays children on tablet screen sizes
 * @param {boolean} laptop Displays children on laptop screen sizes
 * @param {boolean} desktop Displays children on desktop screen sizes
 */
export const DisplayAtMedia = styled.div<DisplayAtMediaProps>`
  display: none;
  order: 4;

  @media ${(props) => props.theme.media.mobileS} {
    display: ${(props) => {
      if (props.mobile) return "initial";

      return "none";
    }};
  }

  @media ${(props) => props.theme.media.mobileM} {
    display: ${(props) => {
      if (props.mobile) return "initial";

      return "none";
    }};
  }

  @media ${(props) => props.theme.media.mobileL} {
    display: ${(props) => {
      if (props.mobile) return "initial";

      return "none";
    }};
  }

  @media ${(props) => props.theme.media.tablet} {
    display: ${(props) => {
      if (props.tablet) return "initial";

      return "none";
    }};
  }

  @media ${(props) => props.theme.media.laptop} {
    display: ${(props) => {
      if (props.laptop) return "initial";

      return "none";
    }};
  }

  @media ${(props) => props.theme.media.laptopL} {
    display: ${(props) => {
      if (props.laptop) return "initial";

      return "none";
    }};
  }

  @media ${(props) => props.theme.media.desktop} {
    display: ${(props) => {
      if (props.desktop) return "initial";

      return "none";
    }};
  }
`;
