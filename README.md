# Weather Forecast Frontend

A simple frontend app for displaying 7-day weather forecasts and solar energy production estimates. This connects to a backend API that fetches weather data and calculates how much energy your solar panels might generate.

## What it does

- Shows weather forecast for the next 7 days with icons, temperatures, and energy estimates
- Displays weekly summary with average pressure, sunshine hours, and temperature extremes
- Automatically gets your location to show local weather
- Calculates estimated solar panel energy production based on weather conditions

## Quick start

The app is already deployed and ready to use at:
**https://weather-forecast-frontend-ofq5.onrender.com/**

Just visit the link and it'll automatically detect your location to show the weather forecast.

## Tech stuff

- Frontend connects to a backend API that uses Open-Meteo weather service
- Solar energy calculation: `energy = 2.5kW × sunshine_hours × 0.2 efficiency`
- Responsive design that works on phones and desktops
- Uses Font Awesome icons for weather conditions

## Features

**7-day forecast table:**
- Date, weather icon, min/max temps
- Estimated solar energy production in kWh

**Weekly summary:**
- Temperature extremes for the week
- Average air pressure and sunshine hours
- General weather overview (rainy week, sunny week, etc.)

That's it! Just a straightforward weather app with solar energy estimates.
