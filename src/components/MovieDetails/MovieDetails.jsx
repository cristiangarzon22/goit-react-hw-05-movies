import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/MovieDetails/MovieDetails.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const cameBack = location.state?.from ?? '/';
 

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ce046fb7a0718a1aac652aa1ca1238c4`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log(movie);
  return (
    <>
      <button className={css.btn}>
        <Link to={cameBack}>{'<-'} Go Back</Link>
      </button>
      <div className={css.container}>
        <div className={css.picture}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
          />
        </div>
        <div className={css.info}>
          <h1>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
          <h2>user score :</h2>
          <p>{movie.vote_average * 10}%</p>
          <h2>overview</h2>
          <p className={css.text}>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <h2>Aditional information</h2>
        <Link to={'cast'} state={{ from: cameBack }}>
        <button className={`${css.btn} ${css.b1}`}>Cast</button>
        </Link>

        <Link to={'reviews'} state={{ from: cameBack }}>
          <button className={`${css.btn} ${css.b1}`}>Reviews</button>
        </Link>
      </div>
      <Outlet/>

    </>
  );
};

export default MovieDetails;
