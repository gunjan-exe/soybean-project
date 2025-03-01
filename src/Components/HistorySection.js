import React from "react";
import HistoryCard from "./HistoryCard";
import './historycard.css';

const historyData = [
  {
    title: "SSD",
    severity: "High Severity",
    severityLevel: "high",
    image: "path/to/image1.jpg", // Replace with an actual image URL
  },
  {
    title: "Downy Mildew",
    severity: "Low Severity",
    severityLevel: "low",
    image: "path/to/image2.jpg",
  },
  {
    title: "Charcoal Rot",
    severity: "Mild Severity",
    severityLevel: "medium",
    image: "path/to/image3.jpg",
  },
];

const HistorySection = () => {
  return (
    <div className="history-section">
      <h2>History</h2>
      <div className="history-cards">
        {historyData.map((item, index) => (
          <HistoryCard
            key={index}
            title={item.title}
            severity={item.severity}
            severityLevel={item.severityLevel}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
