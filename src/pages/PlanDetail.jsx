import React from "react";
import { Link, useLocation } from "react-router-dom";
import TourRouteMap from "../components/TourRouteMap";
import TransportationInfo from "../components/TransportationInfo";

export default function PlanDetail() {
  const {
    state: { selectedAttractions },
  } = useLocation();

  return (
    <div className="w-full h-full flex flex-wrap items-center px-28 relative">
      <TourRouteMap
        level={9}
        draggable={true}
        zoomable={false}
        selectedAttractions={selectedAttractions}
      />
      <TransportationInfo selectedAttractions={selectedAttractions} />
      <Link to={"/plans"} className="absolute bottom-20 right-28">
        저장하기
      </Link>
    </div>
  );
}
