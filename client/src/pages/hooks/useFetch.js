import { useState, useEffect } from "react";
import axios from "axios";
import { setEnvironmentData } from "worker_threads";
const useFeatch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = axios.get(url);
        setEnvironmentData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);
};
