import { useState, useEffect } from "react";

export const useFetchIpData = (searchQuery) => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const genericURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
    const domainSearchURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${searchQuery.input}`;
    const IpSearchURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchQuery.input}`;

    const URL =
      searchQuery.type === "ip"
        ? IpSearchURL
        : searchQuery.type === "domain"
        ? domainSearchURL
        : genericURL;

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setIpData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, apiKey]);

  return [ipData, loading];
};
