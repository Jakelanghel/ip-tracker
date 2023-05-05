import { ContainerSearch } from "./ContainerSearch";
import { PropTypes } from "prop-types";
import SearchBar from "./search-bar/SearchBar";
import Results from "../results/Results";

const Search = (props) => {
  const { data, setData } = props;
  return (
    <ContainerSearch className="container-search">
      <h1>IP Address Tracker</h1>
      <SearchBar setData={setData} />
      <Results ip={data.ip} location={data.location} isp={data.isp} />
    </ContainerSearch>
  );
};

Search.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Search;
