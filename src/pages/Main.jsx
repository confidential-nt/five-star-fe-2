import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import axios from "axios";

export default function Main() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("/data/cities.json").then((res) => setCities(res.data.cities));
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
        />
      )}
    </div>
  );
}
