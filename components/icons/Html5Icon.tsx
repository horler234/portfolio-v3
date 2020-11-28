import { IconSvg, IconSvgProps } from "./IconSvg";

export const Html5Icon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>HTML5</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 1.25L3.86484 17.0004L9.99102 18.75L16.1328 16.998L17.5 1.25H2.5ZM14.5312 6.40625H7.34375L7.5 8.39844H14.375L13.8473 14.3121L10 15.4094L6.14531 14.3156L5.88047 11.2891H7.76562L7.89922 12.8238L10 13.4012L12.0867 12.8184L12.3047 10.3125H5.78125L5.28945 4.46914H14.6953L14.5312 6.40625Z"
    />
  </IconSvg>
);