import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Map from "../components/Map";
import TourismLists from "../components/TourismLists";
import { usePublicDataApi } from "../context/PublicDataApiContext";

export default function NewPlan() {
  const { state: city } = useLocation();
  const [attractions, setAttractions] = useState([]);
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const { publicData } = usePublicDataApi();

  const navigate = useNavigate();

  useEffect(() => {
    // 실제에서는 city 값을 통해 api로 실제 해당 지역의 관광명소 데이터를 받아올 것.
    publicData.getAttractions(city.name).then(setAttractions);
  }, [publicData, city]);

  const onUpdateMyAttractions = (attractions) => {
    setSelectedAttractions(attractions);
  };

  return (
    <>
      <div className="w-full h-full">
        {attractions && (
          <>
            <Map
              coordinates={{
                lat: city.lat,
                lng: city.lng,
              }}
              level={7}
              draggable={true}
              zoomable={false}
              cities={attractions}
            />
            <TourismLists
              cities={attractions}
              onUpdateMyAttractions={onUpdateMyAttractions}
            />
          </>
        )}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/" className="mr-2">
          이전
        </Link>
        <button
          onClick={() =>
            navigate("/plans/detail", {
              state: {
                selectedAttractions,
              },
            })
          }
        >
          선택완료
        </button>
      </div>
    </>
  );
}
