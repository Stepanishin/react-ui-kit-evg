import React, { FC } from "react";
import "./ProgressBarSquare.css";

interface Props {
  percent?: number;
  height?: number;
  colorFill?: string; // filled area color
  colorBg?: string; // unfilled area color
}

// create progress bar ring component with props with typescript
const ProgressBarSquare: FC<Props> = ({
  percent = 50,
  height = 10,
  colorBg = "RGBA(0,219,0,0.4)",
  colorFill = "RGB(0,219,0)",
}) => {
  return (
    <div
      className="progress_bar_container"
      style={{ height: `${height}px`, backgroundColor: `${colorBg}` }}
    >
      <div
        className="progress_bar"
        style={{ width: `${percent}%`, backgroundColor: `${colorFill}` }}
      ></div>
    </div>
  );
};

export default ProgressBarSquare;
