import './WarningBanner.css';

function WarningBanner() {
  return (
    <div className="warning-banner">
      <div className="warning-content">
        <span className="warning-icon">⚠️</span>
        <span className="warning-text">
          This is a student project and is not affiliated with Coinbase or any other cryptocurrency company.
        </span>
      </div>
    </div>
  );
}

export default WarningBanner;