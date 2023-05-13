import { useState, useEffect } from "react";

export const useFetchIpData = (searchQuery) => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(searchQuery.input);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(
          `/.netlify/functions/fetch-data?type=${searchQuery.type}&input=${searchQuery.input}`
        )
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
  }, [searchQuery, apiKey]);

  return [ipData, loading];
};
