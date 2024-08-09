import React, { useEffect } from "react";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

import AOS from "aos";
import "aos/dist/aos.css";

const Map = () => {
  const location = [36.5974697143203, 53.06468470700604];

  const customIcon = new icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776000.png",
    iconSize: [50, 50],
  });

  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div
      className=" max-w-[1000px] border mx-auto h-[550px] rounded-lg z-10 transition-none max-xl:mx-40 max-lg:mx-20"
      data-aos="fade-left"
    >
      <MapContainer center={location} zoom={13} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />

        <Marker
          position={[36.547993380527124, 53.0467722859122]}
          icon={customIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
