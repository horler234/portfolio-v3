import { IconSvg, IconSvgProps } from "./IconSvg";

export const Css3Icon = ({
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
    <title>CSS3</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 1.25L3.86719 17.0008L9.99102 18.75L16.1328 16.998L17.5 1.25H2.5ZM13.8547 14.332L10.0027 15.4297L6.15664 14.3266L5.89297 11.2891H7.77812L7.91211 12.8344L10.0055 13.4266L10.0105 13.4375L12.0992 12.8574L12.3195 10.3516H7.92969L7.77344 8.39844H12.4863L12.6562 6.40625H5.46875L5.3125 4.49219H14.7102L13.8547 14.332Z"
    />
  </IconSvg>
);
