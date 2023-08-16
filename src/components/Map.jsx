import React, { useEffect } from "react";

const { kakao } = window;

export default function Map() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.34, 127.77),
      level: 13,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div className="flex justify-center relative">
      <div
        id="map"
        style={{ width: "80vh", height: "80vh" }}
        className="absolute top-10 w-full h-full rounded-lg shadow-lg"
      ></div>
    </div>
  );
}
