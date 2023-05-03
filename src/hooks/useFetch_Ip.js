import { useEffect } from "react";

export const useFetch_Ip = (setIpData) => {
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_API_KEY
      }
      `
    )
      .then((res) => res.json())
      .then((data) => setIpData(data));
  }, []);
};
