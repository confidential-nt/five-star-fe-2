import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TourRouteMap from "../components/TourRouteMap";
import { usePublicDataApi } from "../context/PublicDataApiContext";

export default function PlanDetail() {
  const {
    state: { selectedAttractions },
  } = useLocation();
  console.log(selectedAttractions);

  const { state: city } = useLocation();
  const [attractions, setAttractions] = useState([]);
  const { publicData } = usePublicDataApi();

  useEffect(() => {
    // 실제에서는 city 값을 통해 api로 실제 해당 지역의 관광명소 데이터를 받아올 것.
    publicData.getAttractions(city.name).then(setAttractions);
  }, [publicData, city]);

  return (
    <div className="w-full h-full">
      <TourRouteMap
        level={7}
        draggable={true}
        zoomable={false}
        selectedAttractions={selectedAttractions}
      />
    </div>
  );
}
