import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import normalMarker from "../img/normal_marker.png";

const { kakao } = window;

function MapMarker({ map, city, overlayDisplay }) {
  const navigate = useNavigate();

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
  }, [map, city, overlayDisplay, navigate]);

  return null;
}

export default MapMarker;
