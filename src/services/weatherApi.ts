import axios, { AxiosResponse } from 'axios';
import { 
  WeatherForecastResponse, 
  WeatherSummaryResponse, 
  LocationRequest 
} from '../types/weather';

const API_BASE_URL = 'https://weather-forecast-api-9vxo.onrender.com/api/weather';

export const weatherApi = {
  getForecast: async (latitude: number, longitude: number): Promise<WeatherForecastResponse> => {
    try {
      const response: AxiosResponse<WeatherForecastResponse> = await axios.post(
        `${API_BASE_URL}/forecast`, 
        { latitude, longitude } as LocationRequest
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getSummary: async (latitude: number, longitude: number): Promise<WeatherSummaryResponse> => {
    try {
      const response: AxiosResponse<WeatherSummaryResponse> = await axios.post(
        `${API_BASE_URL}/summary`, 
        { latitude, longitude } as LocationRequest
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
