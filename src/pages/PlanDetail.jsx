import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TourRouteMap from "../components/TourRouteMap";
import { useTransportationApi } from "../context/TransportationApiContext";

export default function PlanDetail() {
  const {
    state: { selectedAttractions },
  } = useLocation();
  console.log(selectedAttractions);

  const [transportationInfo, setTransportationInfo] = useState([]);

  const { state: city } = useLocation();

  const { transportation } = useTransportationApi();

  useEffect(() => {
    transportation.getTransportation({}).then(setTransportationInfo);
  }, [city, transportation]);

  return (
    <div className="w-full h-full">
      <TourRouteMap
        level={9}
        draggable={true}
        zoomable={false}
        selectedAttractions={selectedAttractions}
      />
    </div>
  );
}
