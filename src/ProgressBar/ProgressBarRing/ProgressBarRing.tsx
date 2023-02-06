import React, { FC } from "react";
import "./ProgressBarRing.css";

interface ProgressBarRingProps {
  percent?: number; // The percent of the progress
  colorFill?: string; // filled area color
  colorBg?: string; // unfilled area color
  colorEmpty?: string; // color when 0 percent
  size?: number; // size of ring in px
  strokeWidth?: number; // Width of stroke in px
}

const ProgressBarRing: FC<ProgressBarRingProps> = ({
  percent = 50,
  colorFill = "RGB(0,219,0)",
  colorBg = "RGBA(0,219,0,0.4)",
  colorEmpty = "gray",
  size = 25,
  strokeWidth = 4,
  ...props
}) => {
  return (
    <div className="circle_container" {...props}>
      <svg
        className="circle-wrap"
        viewBox="2 -2 28 36"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${size}`, height: `${size}` }}
      >
        <circle
          className="circle-container__background"
          r="16"
          cx="16"
          cy="16"
          strokeWidth={strokeWidth}
          style={{ stroke: percent === 0 ? `${colorEmpty}` : `${colorBg}` }}
        ></circle>
        <circle
          className="circle-container__progress"
          r="16"
          cx="16"
          cy="16"
          strokeWidth={strokeWidth}
          style={{
            strokeDashoffset: `${100 - percent}`,
            stroke:
              typeof percent === "number" ? `${colorFill}` : `${colorEmpty}`,
            display: percent === 0 ? "none" : "block",
          }}
        ></circle>
      </svg>
    </div>
  );
};

export default ProgressBarRing;
