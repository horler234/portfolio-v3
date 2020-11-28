import { IconSvg, IconSvgProps } from "./IconSvg";

export const DownloadIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Download</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.7216 11.0105C6.8752 11.1609 7.1248 11.1609 7.28 11.0105L11.9872 6.43766C12.1408 6.28726 12.1408 6.04566 11.9872 5.89526L11.0512 4.98646C10.8976 4.83606 10.648 4.83606 10.4928 4.98646L8.2656 7.14966V1.32406C8.2656 1.11286 8.0896 0.940063 7.8704 0.940063H6.2928C6.0752 0.940063 5.8976 1.11126 5.8976 1.32406V7.30966L3.5072 4.98646C3.3536 4.83606 3.104 4.83606 2.9488 4.98646L2.0128 5.89526C1.8592 6.04566 1.8592 6.28726 2.0128 6.43766L6.7216 11.0105ZM12.056 8.80566V12.1097H1.9424V8.80566H0V13.0825C0 13.6201 0.4336 14.0537 0.9728 14.0537H13.0256C13.5632 14.0537 13.9984 13.6201 13.9984 13.0825V8.80566H12.056Z"
    />
  </IconSvg>
);
