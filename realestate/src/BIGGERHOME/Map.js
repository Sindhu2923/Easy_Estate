import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({ latitude, longitude }) => {
  
  const customIcon = new L.Icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/previews/009/589/758/non_2x/location-location-pin-location-icon-transparent-free-png.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50], 
  });

  const handleMarkerClick = (e) => {
    const map = e.target._map;
    map.setView([latitude, longitude], map.getZoom() + 2); 
  };

  return (
    <div>
      <MapContainer center={[20.5937, 78.9629]} zoom={4} style={{ height: '350px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={customIcon} eventHandlers={{ click: handleMarkerClick }} />
      </MapContainer>
    </div>
  );
};

export default Map;
