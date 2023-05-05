import { useState } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { useFetch_Ip } from "./hooks/useFetch_Ip";
import Search from "./components/search/Search";
import Map from "./components/map/Map";

function App() {
  // useFetch_Ip(setIpData);

  const tstData = {
    ip: "24.239.99.202",
    isp: "Armstrong",
    location: {
      country: "US",
      region: "Pennsylvania",
      city: "North Butler",
      geonameId: 5203600,
      lat: 40.87173,
      lng: -79.87978,
      postalCode: "",
      timezone: "-04:00",
    },
  };

  const [ipData, setIpData] = useState(tstData);

  if (!ipData) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="container-app">
      <GlobalStyles />
      <Search data={ipData} setData={setIpData} />
      <Map />
    </div>
  );
}

export default App;
