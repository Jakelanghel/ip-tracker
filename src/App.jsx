import { useState } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { useFetch } from "./hooks/useFetch";

import Search from "./components/search/Search";
import Map from "./components/map/Map";
import Results from "./components/results/Results";
import Spinner from "./components/loading-element/Spinner";

function App() {
  // Set initial URL base url to get users IP data
  const [url, setUrl] = useState(
    "https://dynamic-api-proxy.onrender.com/api/ipify"
  );
  // Initial data will be users IP data any time the url state is changed useFetch will make new request
  const [data, loading] = useFetch(url);
  // Initialize state value to set maps fly to property to avoid fly to on initial load
  const [search, setSearch] = useState(false);

  const renderedElements = loading ? (
    <Spinner />
  ) : (
    <>
      {/* Search has a child component SearchBar that will handle setting url*/}
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
    <main className="container-app">
      <GlobalStyles />
      {renderedElements}
    </main>
  );
}

export default App;
