import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import { images } from "../../constants/images";
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
  const centerLat = lat + 0.002;

  const customIcon = new Icon({
    iconUrl: images.locationIcon,
    iconSize: [50, 60],
    iconAnchor: [25, 60],
  });

  return (
    <MapContainer
      center={[centerLat, lng]}
      zoom={15}
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]} icon={customIcon}>
        <Tooltip className="custom-tool-tip">
          <p className="marker-info marker-info-ip">
            IP<span className="marker-span">{ip}</span>
          </p>
          <p className="marker-info">
            LAT: <span className="marker-span">{lat}</span>
          </p>
          <p className="marker-info">
            LNG: <span className="marker-span">{lng}</span>
          </p>
        </Tooltip>
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
