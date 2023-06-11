import GridLoader from "react-spinners/GridLoader";
import { PropTypes } from "prop-types";

const Spinner = (props) => {
  const { loading } = props;

  const override = {
    display: "block",
    alignSelf: "center",
    borderColor: "red",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <GridLoader
      color={"#36d7b7"}
      loading={loading}
      cssOverride={override}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
