// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13 0H5a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V5a5 5 0 00-5-5zm3.25 13A3.26 3.26 0 0113 16.25H5A3.26 3.26 0 011.75 13V5A3.26 3.26 0 015 1.75h8A3.26 3.26 0 0116.25 5v8zm-2.5-7.75a1 1 0 100-2 1 1 0 000 2zM9 4.5A4.5 4.5 0 1013.5 9 4.49 4.49 0 009 4.5zM6.25 9a2.75 2.75 0 105.5 0 2.75 2.75 0 00-5.5 0z"
        }
        fill={"currentColor"}
      ></path>

      <defs>
        <linearGradient
          id={"Nza4thWOBLGxa"}
          x1={"12.713"}
          y1={"-23.063"}
          x2={"24.29"}
          y2={"28.279"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#fff"}></stop>

          <stop offset={"1"} stopColor={"#fff"} stopOpacity={"0"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
