import { useState } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { useFetch_Ip } from "./hooks/useFetch_Ip";
import Search from "./components/search/Search";
import Map from "./components/map/Map";

function App() {
  const [ipData, setIpData] = useState(null);

  console.log(ipData);
  useFetch_Ip(setIpData);

  if (!ipData) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="container-app">
      <GlobalStyles />
      <Search data={ipData} />
      <Map />
    </div>
  );
}

export default App;
