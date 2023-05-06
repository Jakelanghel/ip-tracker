import { useState } from "react";
import { PropTypes } from "prop-types";
import { StyledSearchBar } from "./SearchBar.Styled";
import { images } from "../../../constants/images";
import { isValidIPAddress } from "../util/isValidIPAddress";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const { setSearchQuery } = props;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (!isValidIPAddress(input)) {
      setError(true);
    } else {
      setSearchQuery(input);
    }
  };

  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={input}
        onChange={handleChange}
        className={!error ? "" : "error"}
      />
      <button onClick={handleClick}>
        <img src={images.arrowIcon} alt="" />
      </button>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
