import React from 'react'
import HistorySection from '../Components/HistorySection'
import VideoSection from '../Components/VideoSection'
import '../Components/historycard.css';
import Header from '../Components/Header';

const History = () => {
  return (
    <div className="history-page">
      <Header />
      <div className="history-hero">
        <h1>Your Plant Health History</h1>
        <p>Track and monitor your previous plant diagnoses</p>
      </div>
      
      <div className="history-stats">
        <div className="stat-card">
          <h3>Total Scans</h3>
          <p>24</p>
        </div>
        <div className="stat-card">
          <h3>This Month</h3>
          <p>8</p>
        </div>
        <div className="stat-card">
          <h3>Critical Cases</h3>
          <p>3</p>
        </div>
      </div>

      <div className="recent-section">
        <h2>Recently Diagnosed</h2>
        <HistorySection limit={3} />
      </div>

      <div className="all-history-section">
        <div className="section-header">
          <h2>All History</h2>
          <div className="filter-controls">
            <select defaultValue="all">
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>
            <select defaultValue="all">
              <option value="all">All Severity</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <HistorySection />
      </div>
    </div>
  )
}

export default History
