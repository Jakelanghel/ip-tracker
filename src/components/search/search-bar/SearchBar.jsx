import { useState } from "react";
import { PropTypes } from "prop-types";
import { StyledSearchBar } from "./SearchBar.Styled";
import { images } from "../../../constants/images";
import { useFetch_Search_Ip } from "../../../hooks/useFetch_Search_Ip";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
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
      <button onClick={}>
        <img src={images.arrowIcon} alt="" />
      </button>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  setData: PropTypes.func,
};

export default SearchBar;
