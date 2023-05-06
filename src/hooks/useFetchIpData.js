import { useState, useEffect } from "react";

export const useFetchIpData = (searchQuery) => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const url =
      searchQuery === ""
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
        : `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchQuery}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setIpData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return [ipData, loading];
};
