import styled from "styled-components";
import { TextProps } from "./TextProps";
import { TextMixin } from "./TextMixin";

/**
 * ButtonText is a text element
 *
 * @param align text-align
 * @param maxWidth max-width
 *
 * @param padding Full padding property ie padding: 10px 15px 0px 2px
 * @param padTop padding-top
 * @param padRight padding-right
 * @param padLeft padding-left
 * @param padBottom padding-bottom
 *
 * @param margin Full margin property ie margin: 10px 15px 0px 2px
 * @param marginTop margin-top
 * @param marginRight margin-right
 * @param marginLeft margin-left
 * @param marginBottom margin-bottom
 *
 * @param lineHeight custom line-height
 */
export const H1 = styled.h1<TextProps>`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.isGreen ? props.theme.colors.primary.green : "#FFFFFF")};

  ${TextMixin}
`;
