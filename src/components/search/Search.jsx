import { ContainerSearch } from "./ContainerSearch";
import { PropTypes } from "prop-types";
import SearchBar from "./search-bar/SearchBar";

const Search = (props) => {
  const { setUrl, setSearch } = props;
  return (
    <ContainerSearch className="container-search">
      <h1>IP Address Tracker</h1>
      <SearchBar setUrl={setUrl} setSearch={setSearch} />
    </ContainerSearch>
  );
};

Search.propTypes = {
  setUrl: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
