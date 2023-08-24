import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import { getCities } from "../utils/cities";

export default function Main() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities().then(setCities);
  }, []);

  return (
    <div className="w-full h-full">
      {cities.length && (
        <Map
          coordinates={{
            lat: 36.34,
            lng: 127.77,
          }}
          level={13}
          draggable={false}
          zoomable={false}
          cities={cities}
          overlayDisplay={true}
          placeInfo={false}
        />
      )}
    </div>
  );
}
