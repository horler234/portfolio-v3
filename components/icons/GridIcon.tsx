import { IconSvg, IconSvgProps } from "./IconSvg";

export const GridIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="38"
    height="19"
    viewBox="0 0 38 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Grid View</title>
    <rect x="7.6001" width="30.4" height="3.8" fill="#C4C4C4" />
    <rect width="3.8" height="3.8" fill="#C4C4C4" />
    <rect x="7.6001" y="7.59998" width="30.4" height="3.8" fill="#C4C4C4" />
    <rect y="7.59998" width="3.8" height="3.8" fill="#C4C4C4" />
    <rect x="7.6001" y="15.2" width="30.4" height="3.8" fill="#C4C4C4" />
    <rect y="15.2" width="3.8" height="3.8" fill="#C4C4C4" />
  </IconSvg>
);
