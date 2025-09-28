import React, { useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function getData(url, key) {
    try {
      const options = {
        headers: {
          "x-api-key": key,
          "Content-Type": "application.json",
        },
      };

      const { data } = await axios.get(url, options);
      setData(data);
      console.log(data);
    } catch (e) {
      setError(e);
    }
  }

  return [data, error, getData];
};

export default useFetchData;