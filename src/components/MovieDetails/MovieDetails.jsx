import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id: movieId } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=ce046fb7a0718a1aac652aa1ca1238c4`
        );
        const data = await response.json();
        setMovie(data);
        
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieData();
  }, [movieId]); 

  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log(movie);
  return (
    <div>
       console.log(movie.title);
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
      />
    </div>
  );
};

export default MovieDetails;
