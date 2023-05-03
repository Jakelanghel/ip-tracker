import { ContainerSearch } from "./ContainerSearch";
import SearchBar from "./search-bar/SearchBar";

const Search = () => {
  return (
    <ContainerSearch className="container-search">
      <h1>IP Address Tracker</h1>
      <SearchBar />
    </ContainerSearch>
  );
};

export default Search;
