import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movie, setMovie] = useState('');
  const [responsive, setresponse] = useState(null);
  const handleChange = (e) => {
    e.preventDefault();
    setMovie(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movie);
    solicitud(movie);
  };
  const solicitud = async (movie) => {
    try {
      const url = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ce046fb7a0718a1aac652aa1ca1238c4&language=en-US&query=${movie}&page=1&include_adult=false`
      );
      const response = await url.json();
      setresponse(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type movie" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {responsive && (
        <ul>
          {responsive.results.map((e) => (
            <li key={e.id}>
              <Link to={`/movies/${e.id}`}>{e.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
