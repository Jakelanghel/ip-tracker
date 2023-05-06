import { useState, useEffect } from "react";
import { GlobalStyles } from "./components/shared/Global";
import Search from "./components/search/Search";
import Map from "./components/map/Map";
import Results from "./components/results/Results";
import { useFetchIpData } from "./hooks/useFetchIpData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ipData, loading] = useFetchIpData(searchQuery);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="container-app">
      <GlobalStyles />
      <Search setSearchQuery={setSearchQuery} />
      <Results ip={ipData.ip} isp={ipData.isp} location={ipData.location} />
      <Map />
    </div>
  );
}

export default App;
