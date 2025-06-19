import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faCloud, 
  faCloudRain, 
  faSnowflake, 
  faCloudSun, 
  faBolt,
  faSmog,
  faCloudShowersHeavy
} from '@fortawesome/free-solid-svg-icons';

interface WeatherIconProps {
  weatherCode: number;
}

const getWeatherIcon = (weatherCode: number) => {
  if (weatherCode === 0) return faSun; 
  if (weatherCode >= 1 && weatherCode <= 3) return faCloudSun; 
  if (weatherCode >= 45 && weatherCode <= 48) return faSmog; 
  if (weatherCode >= 51 && weatherCode <= 57) return faCloudRain; 
  if (weatherCode >= 61 && weatherCode <= 67) return faCloudRain; 
  if (weatherCode >= 71 && weatherCode <= 77) return faSnowflake; 
  if (weatherCode >= 80 && weatherCode <= 82) return faCloudShowersHeavy; 
  if (weatherCode >= 95 && weatherCode <= 99) return faBolt; 
  return faCloud; 
};

const getIconColor = (weatherCode: number): string => {
  if (weatherCode === 0) return '#FFD700'; 
  if (weatherCode >= 1 && weatherCode <= 3) return '#87CEEB'; 
  if (weatherCode >= 45 && weatherCode <= 48) return '#B0C4DE'; 
  if (weatherCode >= 51 && weatherCode <= 67) return '#4682B4'; 
  if (weatherCode >= 71 && weatherCode <= 77) return '#E6E6FA'; 
  if (weatherCode >= 80 && weatherCode <= 82) return '#4169E1'; 
  if (weatherCode >= 95 && weatherCode <= 99) return '#8B008B'; 
  return '#708090'; 
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherCode }) => {
  return (
    <FontAwesomeIcon 
      icon={getWeatherIcon(weatherCode)} 
      style={{ 
        color: getIconColor(weatherCode),
        fontSize: '32px' 
      }}
    />
  );
};

export default WeatherIcon;
