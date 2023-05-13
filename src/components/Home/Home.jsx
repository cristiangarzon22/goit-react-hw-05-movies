import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/week?api_key=ce046fb7a0718a1aac652aa1ca1238c4"
          );
        const data = await response.json();
        setData(data.results);
        console.log(data);
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
  <ul>
    {data.map((e) => (
      <li key={e.id}>
        <Link to={`/movies/${e.id}`}>{e.title}</Link>
      </li>
    ))}
  </ul>
)}

    </div>
  );
};

export default Home;
