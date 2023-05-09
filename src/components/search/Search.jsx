import { ContainerSearch } from "./ContainerSearch";
import { PropTypes } from "prop-types";
import SearchBar from "./search-bar/SearchBar";

const Search = (props) => {
  const { setSearchQuery } = props;
  return (
    <ContainerSearch className="container-search">
      <h1>IP Address Tracker</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
    </ContainerSearch>
  );
};

Search.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default Search;
