import { useEffect } from 'react'
import markerImageBlue from '../img/Lovepik_com-401342747-map-location-icon.png';
import cities from '../data/cities';

function MapMarker({ map }) {
    useEffect(() => {
        
        const markerBlueUrl = markerImageBlue;
        const markerBlueSize = new window.kakao.maps.Size(40, 40);
        const markerImage = new window.kakao.maps.MarkerImage(markerBlueUrl, markerBlueSize);

        cities.forEach(city => {
            const bounceAmount = 0.02;
            const position = new window.kakao.maps.LatLng(city.lat, city.lng);
            const raisedPosition = new window.kakao.maps.LatLng(city.lat + bounceAmount, city.lng);

            const marker = new window.kakao.maps.Marker({
                position: position,
                image: markerImage,
            });
            marker.setMap(map);
            
            const overlayContent = `<div class="text-red-400 font-bold">
            ${city.name}(으)로 GO!</div>`;
            const customOverlay = new window.kakao.maps.CustomOverlay({
                position: position,
                content: overlayContent,
                aAnchor: 1.5
            });


            window.kakao.maps.event.addListener(marker, 'mouseover', function() {
                marker.setPosition(raisedPosition);
                customOverlay.setMap(map);
            });

            window.kakao.maps.event.addListener(marker, 'mouseout', function() {
                marker.setPosition(position);
                customOverlay.setMap(null);
        });
    });
    }, [map]);

    return null;
}

export default MapMarker