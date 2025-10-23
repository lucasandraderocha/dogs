import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let res;
    let json;
    try {
      setError(null);
      setLoading(true);
      res = await fetch(url, options);
      json = await res.json();
      if (res.ok === false) throw new Error(json.message);
    } catch (error) {
      setError(error.message);
      json = null;
    } finally {
      setData(json);
      setLoading(false);
    }
    return { res, json };
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
