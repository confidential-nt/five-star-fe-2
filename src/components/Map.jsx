import React, { useEffect, useState } from "react";
import MapMarker from "./MapMarker";

const { kakao } = window;

export default function Map() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.34, 127.77),
      level: 13,
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
  }, []);

  return (
    <div className="relative h-full w-full">
      <div
        id="map"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  rounded-lg shadow-lg h-screen-4/5 w-full md:w-screen-4/5 lg:w-screen-2/5"
      ></div>
      {map && <MapMarker map={map} />}
    </div>
  );
}
