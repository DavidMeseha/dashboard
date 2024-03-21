type ProgressBarLayoutProps = {
  children: React.ReactNode;
  total: number;
};

const ProgressBarLayout: React.FC<ProgressBarLayoutProps> = ({
  children,
  total,
}) => {
  return (
    <>
      <div className="progress-set-layout mb-2">{children}</div>
      <div className="d-flex justify-content-between mb-2">
        <h4>Total</h4>
        <p>{total}</p>
      </div>
    </>
  );
};

export default ProgressBarLayout;
