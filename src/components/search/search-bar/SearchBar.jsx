import { useState } from "react";
import { PropTypes } from "prop-types";
import { StyledSearchBar } from "./SearchBar.Styled";
import { images } from "../../../constants/images";
import { checkInput } from "../util/checkInput";

const SearchBar = (props) => {
  const { setUrl, setSearch } = props;
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    // check that user input is a valid domain name or IP address
    const isValidInput = checkInput(input);
    if (!isValidInput) {
      setError(true);
    } else {
      setUrl(
        `https://dynamic-api-proxy.onrender.com/api/ipify?domain=${input}`
      );
      // set search to true so map will fly to new location
      setSearch(true);
      setError(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
      e.target.blur();
    }
  };

  // If user input is invalid set error class and show error msg
  const errorClass = error ? "error" : "";
  const errorMsgElement = error ? (
    <p className="error-msg">Invalid IP or Domain</p>
  ) : null;

  return (
    <StyledSearchBar className="container-search-bar">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={input.ip}
        onChange={handleChange}
        onKeyDown={handleEnter}
        className={errorClass}
      />
      <button onClick={handleClick} aria-label="submit">
        <img src={images.arrowIcon} alt="" />
      </button>
      {errorMsgElement}
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  setUrl: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
