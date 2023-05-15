import { useState, useEffect } from "react";

export const useFetchIpData = (searchQuery) => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(searchQuery);

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
  }, [searchQuery]);

  return [ipData, loading];
};
