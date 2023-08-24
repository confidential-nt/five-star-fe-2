import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import normalMarker from "../img/normal_marker.png";

const { kakao } = window;

function MapMarker({ map, city, overlayDisplay, placeInfo }) {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const markerBlueUrl = normalMarker;
    const markerBlueSize = new kakao.maps.Size(40, 40);
    const markerImage = new kakao.maps.MarkerImage(
      markerBlueUrl,
      markerBlueSize
    );

    const position = new kakao.maps.LatLng(city.lat, city.lng);

    const marker = new kakao.maps.Marker({
      position: position,
      image: markerImage,
    });
    marker.setMap(map);

    if (overlayDisplay) {
      const bounceAmount = 0.02;
      const raisedPosition = new kakao.maps.LatLng(
        city.lat + bounceAmount,
        city.lng
      );

      const overlayContent = `<div class="text-red-400 font-bold">
              ${city.name}(으)로 GO!</div>`;
      const customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: overlayContent,
        aAnchor: 1.5,
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        marker.setPosition(raisedPosition);
        customOverlay.setMap(map);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        marker.setPosition(position);
        customOverlay.setMap(null);
      });
    }
    kakao.maps.event.addListener(marker, "click", function () {
      navigate("/plans/new", {
        state: city,
      });
    });

    if (placeInfo) {
      const placeInfoContent =
        `<div class="bg-white rounded-lg shadow-md p-4">` +
        `<div class="relative w-full h-48 mb-2 overflow-hidden">` +
        `<img src=${city.img} class="w-full h-2/3 object-cover rounded-t-lg mb-2" alt=${city.title}/>` +
        `<div class="flex-grow">` +
        `<h1 class="text-lg font-semibold mb-1">${city.title}</h1>` +
        `<p class="text-gray-600 text-sm">${city.address}</p>` +
        `</div>` +
        `</div>` +
        `</div>`;

      let infoWindow = new kakao.maps.CustomOverlay({
        position: position,
        content: placeInfoContent,
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        infoWindow.setMap(map);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        setTimeout(() => {
          infoWindow.setMap(null);
        });
      });
    }
  }, [map, city, overlayDisplay, navigate, placeInfo]);

  return null;
}

export default MapMarker;
