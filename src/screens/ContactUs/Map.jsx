import React from "react";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const Map = () => {
  const location = [36.57794623867796, 53.06498073745867];

  const customIcon = new icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776000.png",
    iconSize: [50, 50],
  });
  return (
    <div className=" max-w-[1000px] border mx-auto h-[550px] rounded-lg z-10 transition-none">
      <MapContainer center={location} zoom={13} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[36.59794623867796, 53.06498073745867]}
          icon={customIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
