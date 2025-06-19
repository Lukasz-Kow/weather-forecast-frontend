export interface DailyForecastDto {
  date: string; 
  weatherCode: number;
  minTemperature: number;
  maxTemperature: number;
  energyGenerated: number;
  pressure: number;
}

export interface WeatherForecastResponse {
  forecast: DailyForecastDto[];
}

export interface WeatherSummaryResponse {
  averagePressure: number;
  averageSunshineHours: number;
  minTemperature: number;
  maxTemperature: number;
  weekSummary: string;
}

export interface LocationRequest {
  latitude: number;
  longitude: number;
}

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}
