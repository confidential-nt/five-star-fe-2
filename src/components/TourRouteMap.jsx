import React, { useEffect, useState } from "react";
import yellowMarker from "../img/selected_marker.png";

const { kakao } = window;

const Map = ({ level, draggable, zoomable, selectedAttractions }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(
        selectedAttractions[0].lat,
        selectedAttractions[0].lng
      ),
      level,
    };
    const newMap = new kakao.maps.Map(container, options);
    newMap.setDraggable(draggable);
    newMap.setZoomable(zoomable);

    const markerYellowUrl = yellowMarker;
    const markerYellowSize = new kakao.maps.Size(40, 40);
    const markerImage = new kakao.maps.MarkerImage(
      markerYellowUrl,
      markerYellowSize
    );

    selectedAttractions.forEach((attraction) => {
      const markers = new kakao.maps.Marker({
        map: newMap,
        position: new kakao.maps.LatLng(attraction.lat, attraction.lng),
        image: markerImage,
        title: attraction.title,
      });
    });

    const polylinePath = selectedAttractions.map(
      (attraction) => new kakao.maps.LatLng(attraction.lat, attraction.lng)
    );

    selectedAttractions.map((attraction) => {
      const polyline = new kakao.maps.Polyline({
        path: polylinePath,
        strokeWeight: 2,
        strokeColor: "#EF5350",
        strokeOpacity: 0.5,
        strokeStyle: "solid",
      });
      polyline.setMap(newMap);
    });
  }, [level, draggable, zoomable, selectedAttractions]);

  return (
    <div className="relative h-full w-full">
      <div
        id="map"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  rounded-lg shadow-lg h-screen-4/5 w-full md:w-screen-4/5 lg:w-screen-2/5"
      ></div>
    </div>
  );
};

export default Map;
