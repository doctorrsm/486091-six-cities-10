
import useMap from '../../hooks/use-map';
import {useEffect, useRef} from 'react';
import leaflet, {Icon, Marker} from 'leaflet';
import {City, Points} from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const';
import L from 'leaflet';
import {getActiveCardId} from '../../store/app-process/selectors';

type MapProps = {
  currentCity: City,
  points: Points,
  mapClassName: string,
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({currentCity, points, mapClassName}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const selectedPointId = useAppSelector(getActiveCardId);


  useEffect(() => {
    const markerGroup = L.layerGroup();

    if (map) {
      markerGroup.addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        if (point.id === selectedPointId) {
          marker.setIcon(currentCustomIcon);
        } else {
          marker.setIcon(defaultCustomIcon);
        }
        marker.addTo(markerGroup);
      });


    }
    return () => {
      markerGroup.clearLayers();
    };


  }, [map, points, selectedPointId, currentCity ]);

  useEffect(() => {

    if (map) {
      map.flyTo({lat: currentCity.location.latitude, lng: currentCity.location.longitude}, currentCity.location.zoom);
    }

  }, [map, currentCity]);


  return (
    <section
      ref={mapRef}
      className={`${mapClassName}__map map`}
    >

    </section>
  );
}

export default Map;
