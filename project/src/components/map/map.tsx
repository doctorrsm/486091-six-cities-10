
import useMap from '../../hooks/use-map';
import {useEffect, useRef} from 'react';
import leaflet, {Icon, Marker} from 'leaflet';
import {City, Points} from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  currentCity: City,
  points: Points
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

function Map({currentCity, points}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const selectedPointId = useAppSelector((state) => state.activeCardId);


  useEffect(() => {
    if (map) {
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
        marker.addTo(map);
      });


    }


  }, [map, points, selectedPointId]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
      style={{height: 400,}}
    >

    </section>
  );
}

export default Map;
