import React from 'react';

interface LocationLoaderProps {
  isLoading: boolean;
  error: string | null;
}

const LocationLoader: React.FC<LocationLoaderProps> = ({ isLoading, error }) => {
  if (error) {
    return (
      <div className="location-error">
        <h3>Location Error</h3>
        <p>{error}</p>
        <div className="error-solutions">
          <h4>Possible solutions:</h4>
          <ul>
            <li>Check if the browser has access to location (lock icon next to the address)</li>
            <li>Make sure location is enabled in your system</li>
            <li>Try refreshing the page</li>
            <li>Check if you are connected to the internet</li>
          </ul>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="location-loading">
        <div className="spinner"></div>
        <h3>Loading...</h3>
        <p>Getting location and weather data...</p>
        <p>If the browser asks for location access, click "Allow"</p>
      </div>
    );
  }

  return null;
};

export default LocationLoader;
