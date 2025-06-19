import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherTable from './components/WeatherTable';
import WeatherSummary from './components/WeatherSummary';
import LocationLoader from './components/LocationLoader';
import WorldMap from './components/WorldMap';
import DarkModeToggle from './components/DarkModeToggle';
import { weatherApi } from './services/weatherApi';
import { getCurrentLocation } from './utils/geolocation';
import { WeatherSummaryResponse, DailyForecastDto } from './types/weather';

const App: React.FC = () => {
  const [forecast, setForecast] = useState<DailyForecastDto[] | null>(null);
  const [summary, setSummary] = useState<WeatherSummaryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showMap, setShowMap] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<{latitude: number, longitude: number} | undefined>(undefined);

  useEffect(() => {
    loadWeatherData();
  }, []);

  const loadWeatherData = async (customLocation?: {latitude: number, longitude: number}): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      let location;
      if (customLocation) {
        location = customLocation;
        setCurrentLocation(location);
      } else {
          location = await getCurrentLocation();
          setCurrentLocation(location);
      }
      
      
      const [forecastData, summaryData] = await Promise.all([
        weatherApi.getForecast(location.latitude, location.longitude),
        weatherApi.getSummary(location.latitude, location.longitude)
      ]);

      setForecast(forecastData.forecast);
      setSummary(summaryData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while loading data';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleMapLocationSelect = (latitude: number, longitude: number) => {
    setShowMap(false);
    loadWeatherData({ latitude, longitude });
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-top">
          <h1>🌤️ Weather Forecast App</h1>
          <DarkModeToggle />
        </div>
        <p>7-day weather forecast with solar energy calculator</p>
        
        <div className="location-controls">
          <button
            onClick={() => setShowMap(!showMap)}
            className="map-toggle-button"
          >
            🗺️ Choose on map
          </button>
        </div>
      </header>

      <main className="app-main">        
        <LocationLoader isLoading={loading} error={error} />
        
        {showMap && currentLocation && (
          <div className="map-section">
            <WorldMap
              onLocationSelect={handleMapLocationSelect}
              currentLocation={currentLocation}
            />
          </div>
        )}
        
        {!loading && !error && forecast && summary && (
          <>
            <WeatherTable forecast={forecast} />
            <WeatherSummary summary={summary} />
          </>
        )}
        
        {error && (
          <div className="location-error">
            <h3>❌ An error occurred</h3>
            <p>{error}</p>
            <button onClick={() => loadWeatherData()} className="retry-button">
              Try again
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;