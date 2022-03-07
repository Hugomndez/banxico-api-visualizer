import { useEffect, useState, useRef } from 'react';

const useFetch = (url, options) => {
  const cache = useRef({});
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus('fetching');
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus('fetched');
      } else {
        const response = await fetch(url, options);
        const data = await response.json();
        cache.current[url] = data;
        setData(data);
        setStatus('fetched');
      }
    };

    fetchData();
  }, [url, options]);

  return { status, data };
};

export default useFetch;
