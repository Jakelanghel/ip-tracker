import { StyledSearchBar } from "./SearchBar.Styled";
import { images } from "../../../constants/images";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search for any IP address or domain" />
      <button>
        <img src={images.arrowIcon} alt="" />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
