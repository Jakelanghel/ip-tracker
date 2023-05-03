import { StyledResults } from "./Results.Styled";
const Results = () => {
  return (
    <StyledResults>
      <div className="container-data">
        <h3>Ip Address</h3>
        <p>192.212.174.101</p>
      </div>
      <div className="container-data">
        <h3>location</h3>
        <p>Brooklyn, NY 10001</p>
      </div>
      <div className="container-data">
        <h3>Time Zones</h3>
        <p>UTC -5:00</p>
      </div>
      <div className="container-data">
        <h3>ISP</h3>
        <p>Space X Starlink</p>
      </div>
    </StyledResults>
  );
};

export default Results;
