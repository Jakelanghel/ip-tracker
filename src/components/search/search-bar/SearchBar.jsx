import { useState } from "react";
import { PropTypes } from "prop-types";
import { StyledSearchBar } from "./SearchBar.Styled";
import { images } from "../../../constants/images";
import { isValidIPAddress } from "../util/isValidIPAddress";
import { isValidDomain } from "../util/isValidDomain";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const { setSearchQuery } = props;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    let isValidInput = false;
    let searchQuery = {};

    if (isValidIPAddress(input)) {
      isValidInput = true;
      searchQuery = { type: "ip", input: input };
    } else if (isValidDomain(input)) {
      isValidInput = true;
      searchQuery = { type: "domain", input: input };
    }

    setError(!isValidInput);
    setSearchQuery(searchQuery);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <StyledSearchBar className="container-search-bar">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={input.ip}
        onChange={handleChange}
        onKeyDown={handleEnter}
        className={!error ? "" : "error"}
      />
      <button onClick={handleClick}>
        <img src={images.arrowIcon} alt="" />
      </button>
      {error ? <p className="error-msg">Invalid IP or Domain</p> : null}
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
