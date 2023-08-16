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
    <div
      id="map"
      style={{ width: "80vh", height: "80vh" }}
      /* className="w-80vw h-80vh mx-auto my-8 rounded-lg shadow-lg" */
    ></div>
  );
}
