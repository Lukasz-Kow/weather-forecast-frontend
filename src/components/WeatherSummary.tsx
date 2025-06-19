import React from 'react';
import { WeatherSummaryResponse } from '../types/weather';

interface WeatherSummaryProps {
  summary: WeatherSummaryResponse;
}

const WeatherSummary: React.FC<WeatherSummaryProps> = ({ summary }) => {
  if (!summary) {
    return <div>No summary data available</div>;
  }

  return (
    <div className="weather-summary">
      <h3>Week Summary</h3>
      <div className="summary-grid">
        <div className="summary-item">
          <span className="summary-label">Average Pressure:</span>
          <span className="summary-value">{summary.averagePressure.toFixed(1)} hPa</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Average Sunshine Hours:</span>
          <span className="summary-value">{summary.averageSunshineHours.toFixed(1)} h</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Min/Max Temperature:</span>
          <span className="summary-value">
            {Math.round(summary.minTemperature)}°C / {Math.round(summary.maxTemperature)}°C
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Forecast:</span>
          <span className="summary-value week-summary">{summary.weekSummary}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherSummary;
