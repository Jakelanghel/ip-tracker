import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const { lng, lat, ip } = props;
  return (
    <MapContainer center={[lat, lng]} zoom={15} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} />

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
};

export default Map;
