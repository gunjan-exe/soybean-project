import React from "react";
import HistoryCard from "./HistoryCard";
import './historycard.css';

const historyData = [
  {
    title: "Sudden Death Syndrome",
    severity: "High Severity",
    severityLevel: "high",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2942&auto=format&fit=crop",
  },
  {
    title: "Downy Mildew",
    severity: "Low Severity",
    severityLevel: "low",
    date: "2024-03-12",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2942&auto=format&fit=crop",
  },
  {
    title: "Charcoal Rot",
    severity: "Medium Severity",
    severityLevel: "medium",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2942&auto=format&fit=crop",
  },
];

const HistorySection = ({ limit }) => {
  const displayData = limit ? historyData.slice(0, limit) : historyData;

  return (
    <div className="history-section">
      <div className="history-cards">
        {displayData.map((item, index) => (
          <HistoryCard
            key={index}
            title={item.title}
            severity={item.severity}
            severityLevel={item.severityLevel}
            image={item.image}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
