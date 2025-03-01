import React from "react";
import './historycard.css';

const HistoryCard = ({ title, severity, severityLevel, image }) => {
  return (
    <div className="history-card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-content">
          <h3>{title}</h3>
          <p className={`severity ${severityLevel}`}>{severity}</p>
        </div>
        <button className="card-arrow">
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;
