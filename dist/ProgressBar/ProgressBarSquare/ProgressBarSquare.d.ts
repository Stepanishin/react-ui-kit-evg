import { FC } from "react";
import "./ProgressBarSquare.css";
interface Props {
    percent?: number;
    height?: number;
    colorFill?: string;
    colorBg?: string;
}
declare const ProgressBarSquare: FC<Props>;
export default ProgressBarSquare;
