import { useEffect } from "react";
import blueMarker from "../img/normal_marker.png";

const { kakao } = window;

function MapMarker({ map, city }) {

    useEffect(() => {
        const markerBlueUrl = blueMarker;
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

        const placeInfoContent =
            `<div class="relative bg-white rounded-lg shadow-md p-4 transform -translate-y-2/3">` +
            `<div class="w-full h-48 mb-2 overflow-hidden">` +
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
            zIndex: 1
        });

        kakao.maps.event.addListener(marker, "mouseover", function () {
            infoWindow.setMap(map);
        });

        kakao.maps.event.addListener(marker, "mouseout", function () {
            setTimeout(() => {
                infoWindow.setMap(null);
            });
        });

    }, [map, city]);

    return null;
}

export default MapMarker;
