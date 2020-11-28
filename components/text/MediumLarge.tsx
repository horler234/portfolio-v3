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
export const MediumLarge = styled.span<TextProps>`
  font-size: 32px;
  font-weight: 700;
  line-height: 37.57px;

  ${TextMixin}
`;
