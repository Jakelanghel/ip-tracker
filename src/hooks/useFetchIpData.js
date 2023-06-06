import { useState, useEffect } from "react";

export const useFetchIpData = (searchQuery) => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);

  const ULR =
    searchQuery.type === "ip"
      ? `https://dynamic-api-proxy.onrender.com/api/ipify?ipAddress=${searchQuery.input}`
      : searchQuery.type === "domain"
      ? `https://dynamic-api-proxy.onrender.com/api/ipify?domain=${searchQuery.input}`
      : "https://dynamic-api-proxy.onrender.com/api/ipify";

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(ULR)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setIpData(data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return [ipData, loading];
};
