import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dummyData = [];

        for (let page = 0; page < 312; page++) {
          const response = await axios.get(`${url}?page=${page}`);
          const fetchedData = response.data.Courses;
          dummyData = [...dummyData, ...fetchedData];
        }

        setData((prevData) => [...prevData, ...dummyData]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetchData;
