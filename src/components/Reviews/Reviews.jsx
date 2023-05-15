import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import css from 'components/Reviews/Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    async function fecthReviews() {
      try {
        const solicitud = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ce046fb7a0718a1aac652aa1ca1238c4&language=en-US`
        );
        const response = await solicitud.json();
        setReview(response);
      } catch (error) {
        console.log(error);
      }
    }

    fecthReviews();
  }, [id]);

  console.log('el review', review);

  return (
    <>
      <h2>Reseñas</h2>

      {review && review.results ? (
        review.results.map((e) => (
          <ul>
            <b>
              <li key={e.id}>Author : {e.author}</li>
            </b>
            <li className={css.li} key={e.id}>
              {e.content}
            </li>
          </ul>
        ))
      ) : (
        <h1>sorry</h1>
      )}
    </>
  );
};

export default Reviews;
