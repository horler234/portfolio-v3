import { IconSvg, IconSvgProps } from "./IconSvg";

export const ListIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="32"
    height="20"
    viewBox="0 0 32 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>List View</title>
    <rect x="22.8572" width="8.57143" height="8.57143" fill="#C4C4C4" />
    <rect
      x="22.8572"
      y="11.4286"
      width="8.57143"
      height="8.57143"
      fill="#C4C4C4"
    />
    <rect x="11.4285" width="8.57143" height="8.57143" fill="#C4C4C4" />
    <rect
      x="11.4285"
      y="11.4286"
      width="8.57143"
      height="8.57143"
      fill="#C4C4C4"
    />
    <rect width="8.57143" height="8.57143" fill="#C4C4C4" />
    <rect y="11.4286" width="8.57143" height="8.57143" fill="#C4C4C4" />
  </IconSvg>
);
