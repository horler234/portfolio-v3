/**
 * TextProps are the props accepted by all ./text components.
 * 
 * @param align text-align
 * 
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
export interface TextProps {
    // Text Align
    align?: string;
  
    // Width Option
    maxWidth?: string; 
  
    // Padding Options
    padding?: string;
    padTop?: string;
    padRight?: string;
    padBottom?: string;
    padLeft?: string;
  
    // Margin Options
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
  
    // Line Height
    lineHeight?: string;

    // color
    isGreen?: boolean;
  }
  