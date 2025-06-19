import React from 'react';
import { DailyForecastDto } from '../types/weather';
import WeatherIcon from '../utils/WeatherIcon';

interface WeatherTableProps {
  forecast: DailyForecastDto[];
}

const WeatherTable: React.FC<WeatherTableProps> = ({ forecast }) => {
  const formatDate = (dateString: string): { dayName: string; dayMonth: string } => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    return {
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayMonth: `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
    };
  };

  if (!forecast || forecast.length === 0) {
    return <div>No forecast data available</div>;
  }

  return (
    <div className="weather-table">
      <h2>7-Day Weather Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day: DailyForecastDto, index: number) => {
          const dateInfo = formatDate(day.date);
          return (
            <div key={index} className="forecast-day">
              <div className="day-header">
                <div className="day-name">{dateInfo.dayName}</div>
                <div className="day-date">{dateInfo.dayMonth}</div>
              </div>
              
              <div className="weather-icon">
                <WeatherIcon weatherCode={day.weatherCode} />
              </div>
              
              <div className="temperatures">
                <div className="temp-max">{Math.round(day.maxTemperature)}°C</div>
                <div className="temp-min">{Math.round(day.minTemperature)}°C</div>
              </div>
              
              <div className="energy-production">
                <span className="energy-label">Energy:</span>
                <span className="energy-value">{day.energyGenerated.toFixed(1)} kWh</span>
              </div>
              
              <div className="pressure">
                <span className="pressure-value">{Math.round(day.pressure)} hPa</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherTable;