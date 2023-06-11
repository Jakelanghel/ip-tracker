import { useState } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { tstData } from "./tstData";
import { useFetch } from "./hooks/useFetch";

import Search from "./components/search/Search";
import Map from "./components/map/Map";
import Results from "./components/results/Results";
import loadingElement from "./components/loading-element/Spinner";
import Spinner from "./components/loading-element/Spinner";

function App() {
  const [url, setUrl] = useState(
    "https://dynamic-api-proxy.onrender.com/api/ipify"
  );

  const [search, setSearch] = useState(false);

  // test data comment out loading logic and real data to use
  // const data = tstData;

  const [data, loading] = useFetch(url);
  // const loading = true;

  const renderedElements = loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <Search setUrl={setUrl} setSearch={setSearch} />
      <Results ip={data.ip} isp={data.isp} location={data.location} />
      <Map
        lng={data.location.lng}
        lat={data.location.lat}
        ip={data.ip}
        search={search}
      />
    </>
  );

  return (
    <div className="container-app">
      <GlobalStyles />

      {renderedElements}
    </div>
  );
}

export default App;
