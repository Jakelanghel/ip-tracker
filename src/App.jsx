import { useState } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { useFetchIpData } from "./hooks/useFetchIpData";

import Search from "./components/search/Search";
import Map from "./components/map/Map";
import Results from "./components/results/Results";

function App() {
  const [searchQuery, setSearchQuery] = useState({
    type: "generic",
    input: "",
  });
  const [ipData, loading] = useFetchIpData(searchQuery);
  // const [ipData, setIpData] = useState(tstData);

  console.log(ipData);
  if (loading || !ipData.ip) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="container-app">
      <GlobalStyles />
      <Search setSearchQuery={setSearchQuery} />
      <Results ip={ipData.ip} isp={ipData.isp} location={ipData.location} />
      <Map
        lng={ipData.location.lng}
        lat={ipData.location.lat}
        ip={ipData.ip}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
