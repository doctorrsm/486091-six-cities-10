
import useMap from '../../hooks/use-map';
import {useEffect, useRef} from 'react';
import leaflet, {Icon, Marker} from 'leaflet';
import {City, Points} from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';
import L from 'leaflet';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  currentCity: City,
  points: Points
}

function Map({currentCity, points}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const selectedPointId = useAppSelector((state) => state.activeCardId);

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

  useEffect(() => {
    const markerGroup = L.layerGroup();

    if (map) {
      markerGroup.addTo(map);
      points.forEach((point) => {
        L.marker({
          lat: point.location.latitude,
          lng: point.location.longitude}, {
          icon: (point.id === selectedPointId) ? currentCustomIcon : defaultCustomIcon},
        ).addTo(markerGroup);
      });
    }

    return () => {
      markerGroup.clearLayers();
    };
  }, [map, points, selectedPointId]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >

    </section>
  );
}

export default Map;
