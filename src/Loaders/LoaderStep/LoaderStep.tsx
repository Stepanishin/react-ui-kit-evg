import React, { useEffect, useState } from "react";
import "./styles.css";

interface LoaderInterfaceProps {
  loaderColor: string;
  loaderHeight: number;
  loaderWidth: number;
  isVisible: boolean;
  loaderQuantity: number;
}

const LoaderStep: React.FC<LoaderInterfaceProps> = ({
  loaderColor = "rgb(50, 128, 205)",
  loaderHeight = 80,
  loaderWidth = 50,
  isVisible = true,
  loaderQuantity = 10,
}) => {
  let barStyle = {
    backgroundColor: loaderColor,
    height: `${loaderHeight}px`,
    width: `${loaderWidth}px`,
    animationDelay: "",
  };

  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes loader {
        0% {
          transform: scaleY(0.1);
        }
        50% {
          transform: scaleY(1);
          background: ${loaderColor};
        }
        100% {
          transform: scaleY(0.1);
          background: transparent;
        }
      }
      `;
    document.head.appendChild(style);

    const container = document.getElementById("LoaderWrapperMiddle");
    container!.innerHTML = "";
    let row = 0.1;
    for (let i = 0; i < loaderQuantity; i++) {
      const bar = document.createElement("div");
      bar.className = `bar bar${i}`;
      row += 0.1;
      barStyle.animationDelay = ` ${row}s`;
      Object.assign(bar.style, barStyle);
      container!.appendChild(bar);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [loaderColor, loaderHeight, loaderWidth, loaderQuantity]);

  return (
    <>
      {isVisible && (
        <div className="loader-overlay">
          <div className="middle" id="LoaderWrapperMiddle"></div>
        </div>
      )}
    </>
  );
};

export default LoaderStep;
