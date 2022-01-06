import React from "react";

import githubAPI from "../apis/githubAPI";

const useFetchData = (route) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await githubAPI.get(route);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return [data, error];
};

export default useFetchData;
