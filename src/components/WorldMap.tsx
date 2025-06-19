import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface WorldMapProps {
  onLocationSelect: (latitude: number, longitude: number) => void;
  currentLocation: { latitude: number; longitude: number }; 
}

interface LocationMarkerProps {
  position: [number, number];
  onLocationSelect: (latitude: number, longitude: number) => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ position, onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>(position);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);
      onLocationSelect(lat, lng);
    },
  });

  return <Marker position={markerPosition} />;
};

const WorldMap: React.FC<WorldMapProps> = ({ onLocationSelect, currentLocation }) => {
  const mapCenter: [number, number] = [currentLocation.latitude, currentLocation.longitude];

  return (
    <div className="world-map-container">
      <h3>🗺️ Choose location on map</h3>
      <div className="map-wrapper">
        <MapContainer
          center={mapCenter}
          zoom={6}
          style={{ height: '400px', width: '100%', borderRadius: '10px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker 
            position={mapCenter} 
            onLocationSelect={onLocationSelect}
          />
        </MapContainer>
      </div>
      <p className="map-hint">
        💡 Click on the map to select a new location
      </p>
    </div>
  );
};

export default WorldMap;
