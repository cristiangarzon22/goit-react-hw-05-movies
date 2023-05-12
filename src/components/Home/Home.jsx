import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/550?api_key=ce046fb7a0718a1aac652aa1ca1238c4"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
