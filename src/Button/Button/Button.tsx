import React, { FC } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  height?: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  borderRadius?: string;
};

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
  height,
  width,
  color,
  backgroundColor,
  hoverColor,
  hoverBackgroundColor,
  borderRadius,
}) => {
  const style = {
    height,
    width,
    color,
    backgroundColor,
    borderRadius,
  };

  const hoverStyle = {
    color: hoverColor,
    backgroundColor: hoverBackgroundColor,
  };

  const buttonClass = `${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      style={style}
      {...(hoverColor || hoverBackgroundColor
        ? {
            onMouseOver: (e) =>
              Object.assign(e.currentTarget.style, hoverStyle),
          }
        : {})}
      {...(hoverColor || hoverBackgroundColor
        ? { onMouseLeave: (e) => Object.assign(e.currentTarget.style, style) }
        : {})}
    >
      {label}
    </button>
  );
};

export default Button;
