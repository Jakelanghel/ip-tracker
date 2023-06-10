import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [usrData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(url)
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
  }, [url]);
  return [usrData, loading];
};
