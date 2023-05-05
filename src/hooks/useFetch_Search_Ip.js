// import { useEffect } from "react";
import { isValidIPAddress } from "../components/search/util/isValidIPAddress";

export const useFetch_Search_Ip = (ipAddress, setIpData, setError) => {
  if (!isValidIPAddress) {
    setError(true);
  } else {
    setError(false);
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_API_KEY
      }&ipAddress=${ipAddress}
      `
    )
      .then((res) => res.json())
      .then((data) => setIpData(data));
  }

  // useEffect(() => {
  //   fetch(
  //     `https://geo.ipify.org/api/v2/country,city?apiKey=${
  //       import.meta.env.VITE_API_KEY
  //     }&ipAddress=${ipAddress}
  //     `
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setIpData(data));
  // });
};
