import { Route, Routes } from 'react-router-dom';
import { lazy,Suspense } from "react";
import SharedLayout from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
//import MoviesDetails from './MovieDetails/MovieDetails';
//import Movies from './Movies/Movies';
import Reviews from './Reviews/Reviews';
import Home from './Home/Home';
const Movies = lazy(() => import("components/Movies/Movies"));
const MoviesDetails = lazy(() => import("components/MovieDetails/MovieDetails"));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          } />
          <Route path="/movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>pagina no encontrada</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
