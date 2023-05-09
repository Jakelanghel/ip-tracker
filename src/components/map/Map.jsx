import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const { lng, lat, ip, searchQuery } = props;
  const mapRef = useRef(null);
  const map = mapRef.current;

  const updateLocation = () => {
    if (searchQuery.type) {
      map.flyTo([lat, lng], 15, {
        duration: 2,
      });
    }
  };

  updateLocation();

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]}>
        <Tooltip>IP: {ip}</Tooltip>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  ip: PropTypes.string.isRequired,
  searchQuery: PropTypes.object.isRequired,
};

export default Map;
