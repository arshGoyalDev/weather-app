import {useState, useEffect} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const fetchedData = await res.json();
      setData(fetchedData);
    };

    fetchData();
  });

  return data;
}

export default useFetch