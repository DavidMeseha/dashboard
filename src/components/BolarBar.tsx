import { useEffect, useState } from "react";

interface BiBolerBarProps {
  total: number;
  valueA: number;
  title: string;
  labelA: string;
  labelB: string;
}

const BolarBar: React.FC<BiBolerBarProps> = ({
  total,
  title,
  valueA,
  labelA,
  labelB,
}) => {
  // (valueA / total) * 100;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.floor((valueA / total) * 100));
  }, [valueA, total]);

  return (
    <>
      <div className="bolar-bar-labels">
        <p>{labelA}</p>
        <p>{title}</p>
        <p>{labelB}</p>
      </div>
      <div className="progress-container">
        <div style={{ width: `${percent}%` }} className="progress"></div>
        <p className="progress-value left">{percent}%</p>
        <p className="progress-value">{((total - valueA) / total) * 100}%</p>
      </div>
    </>
  );
};
export default BolarBar;
