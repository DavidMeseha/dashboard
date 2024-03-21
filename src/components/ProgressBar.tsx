import { useEffect, useState } from "react";
import "./Bars.css";

interface ProgressBarProps {
  max: number;
  value: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ max, value, label }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.floor((value / max) * 100));
  }, [value, max]);

  return (
    <>
      <label>{label}</label>
      <div title={`${percent}%`} className="progress-bar progress-container">
        <div className="progress" style={{ width: `${percent}%` }}></div>
        <p className="progress-value">{percent}%</p>
      </div>
    </>
  );
};
export default ProgressBar;
