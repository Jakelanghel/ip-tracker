import { useState } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { useFetch_Ip } from "./hooks/useFetch_Ip";

import Search from "./components/search/Search";
import Map from "./components/map/Map";

function App() {
  const [IpData, setIpData] = useState(null);

  console.log(IpData);
  useFetch_Ip(setIpData);
  return (
    <div className="container-app">
      <GlobalStyles />
      <Search />
      <Map />
    </div>
  );
}

export default App;
