import { StyledResults } from "./Results.Styled";
import { PropTypes } from "prop-types";
import usStates from "us-state-codes";

const Results = (props) => {
  // const locationString = `${props.location.city}, `;
  const { ip, isp, location } = props;

  const getAbbreviation = (stateName) => {
    const state = usStates.getStateCodeByStateName(stateName);
    return state || stateName;
  };

  const state = getAbbreviation(location.region);

  return (
    <StyledResults>
      <div className="container-data">
        <h3>Ip Address</h3>
        {ip}
      </div>
      <div className="container-data">
        <h3>location</h3>
        {state}
      </div>
      <div className="container-data">
        <h3>Time Zones</h3>
        <p>UTC -5:00</p>
      </div>
      <div className="container-data">
        <h3>ISP</h3>
        <p>{isp}</p>
      </div>
    </StyledResults>
  );
};

Results.propTypes = {
  ip: PropTypes.string.isRequired,
  isp: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default Results;
