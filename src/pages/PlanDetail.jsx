import React from "react";
import { useLocation } from "react-router-dom";
import TourRouteMap from "../components/TourRouteMap";
import TransportationInfo from "../components/TransportationInfo";

export default function PlanDetail() {
  const {
    state: { selectedAttractions },
  } = useLocation();

  return (
    <div className="w-full h-full flex flex-wrap items-center px-28">
      <TourRouteMap
        level={9}
        draggable={true}
        zoomable={false}
        selectedAttractions={selectedAttractions}
      />
      <TransportationInfo selectedAttractions={selectedAttractions} />
    </div>
  );
}
