import React from "react";
import { useLocation } from "react-router-dom";

export default function PlanDetail() {
  const {
    state: { selectedAttractions },
  } = useLocation();
  console.log(selectedAttractions);
  return <div>여기는 여행 상세 페이지</div>;
}
