import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/Cast/Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ce046fb7a0718a1aac652aa1ca1238c4&language=en-US`
        );
        const data = await response.json();
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [id]);

  console.log('el cast', cast);

  return (
    <div>
      <h2>Lista de actores</h2>
      <ul>
        {cast &&
          cast.cast.map((actor) => (
            <li className={css.li} key={actor.id}>
              <b>actor name :</b> {actor.name}
              <br />
              <br />
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt="imagen del actor"
              />
              <br />
              <br />
              <b>character :</b> {actor.character}
              <br />
              <br />
              <br />
              <br />
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
