import { ContainerSearch } from "./ContainerSearch";
import { PropTypes } from "prop-types";
import SearchBar from "./search-bar/SearchBar";
import Results from "../results/Results";

const Search = (props) => {
  const { data } = props;

  return (
    <ContainerSearch className="container-search">
      <h1>IP Address Tracker</h1>
      <Results ip={data.ip} location={data.location} isp={data.isp} />
      <SearchBar />
    </ContainerSearch>
  );
};

Search.propTypes = {
  data: PropTypes.object,
};

export default Search;
