import React, { useEffect, useState } from "react";
import { useTransportationApi } from "../context/TransportationApiContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWalk, BiSolidBus } from "react-icons/bi";
import { FaSubway } from "react-icons/fa";
import { secondsToHour } from "../utils/time";

export default function TransportationDetail({ start, end }) {
  const [transportationDetail, setTransportationDetail] = useState([]);

  const { transportation } = useTransportationApi();

  useEffect(() => {
    transportation
      .getTransportation({
        startX: String(start.lng),
        startY: String(start.lat),
        endX: String(end.lng),
        endY: String(end.lat),
      })
      .then((info) => info.sort((a, b) => a.totalTime - b.totalTime))
      .then((detail) => setTransportationDetail(detail[0]));
  }, [transportation, start.lng, start.lat, end.lng, end.lat]);
  return (
    <li className="flex flex-col items-center lg:items-start mb-3">
      <h3 className="flex items-center text-lg font-bold">
        {start.title}
        <AiOutlineArrowRight />
        {end.title}
        경로 안내
      </h3>
      <strong className="font-semibold">
        총 소요시간:{" "}
        {transportationDetail && secondsToHour(transportationDetail.totalTime)}
      </strong>
      <ol>
        {transportationDetail &&
          transportationDetail.legs &&
          transportationDetail.legs.map((leg, index) => (
            <li key={index} className="mb-2">
              <div className="flex items-center">
                <span>{leg.start.name}</span>
                <AiOutlineArrowRight />
                <span>{leg.end.name}</span>
              </div>
              <div className="flex items-center">
                <span>{convertToTransportationIcon(leg.mode)}</span>
                <span>{secondsToHour(leg.sectionTime)} 소요</span>
              </div>
            </li>
          ))}
      </ol>
    </li>
  );
}

function convertToTransportationIcon(transportation) {
  switch (transportation) {
    case "WALK":
      return <BiWalk aria-label="도보" />;
    case "BUS":
      return <BiSolidBus aria-label="버스" />;
    case "SUBWAY":
      return <FaSubway aria-label="지하철" />;
    default:
      throw new Error("알 수 없는 교통수단 이름");
  }
}
