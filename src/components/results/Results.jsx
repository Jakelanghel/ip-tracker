import { StyledResults } from "./Results.Styled";
import { PropTypes } from "prop-types";
import usStates from "us-state-codes";

const Results = (props) => {
  const { ip, isp, location } = props;

  const getAbbreviation = (stateName) => {
    const state = usStates.getStateCodeByStateName(stateName);
    return state || stateName;
  };

  const state = getAbbreviation(location.region);

  return (
    <StyledResults className="container-results">
      <div className="container-data">
        <h3 className="title">Ip Address</h3>
        <p className="data">{ip}</p>
      </div>
      <div className="container-data">
        <h3 className="title">location</h3>
        <p className="data">
          {location.city}, {state}
          <span className="post-code">{location.postalCode}</span>
        </p>
      </div>
      <div className="container-data">
        <h3 className="title">Time Zones</h3>
        <p className="data">{location.timezone}</p>
      </div>
      <div className="container-data">
        <h3 className="title">ISP</h3>
        <p className="data">{isp}</p>
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
