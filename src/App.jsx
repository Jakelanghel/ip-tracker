import { useState, useEffect } from "react";
import { GlobalStyles } from "./components/shared/Global";
import Search from "./components/search/Search";
import Map from "./components/map/Map";
import Results from "./components/results/Results";
import { useFetchIpData } from "./hooks/useFetchIpData";

function App() {
  const [searchQuery, setSearchQuery] = useState({});

  const tstData = {
    ip: "24.239.99.202",
    isp: "Armstrong",
    location: {
      city: "North Butler",
      country: "US",
      geonameId: 5203600,
      lat: 40.87173,
      lng: -79.87978,
      postalCode: "",
      region: "Pennsylvania",
      timezone: "-04:00",
    },
  };

  const [ipData, loading] = useFetchIpData(searchQuery);
  // const [ipData, setIpData] = useState(tstData);
  console.log(searchQuery);

  console.log(ipData);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="container-app">
      <GlobalStyles />
      <Search setSearchQuery={setSearchQuery} />
      <Results ip={ipData.ip} isp={ipData.isp} location={ipData.location} />
      <Map lng={ipData.location.lng} lat={ipData.location.lat} ip={ipData.ip} />
    </div>
  );
}

export default App;
