import { FC } from "react";
import "./ProgressBarRing.css";
interface ProgressBarRingProps {
    percent?: number;
    colorFill?: string;
    colorBg?: string;
    colorEmpty?: string;
    size?: number;
    strokeWidth?: number;
}
declare const ProgressBarRing: FC<ProgressBarRingProps>;
export default ProgressBarRing;
