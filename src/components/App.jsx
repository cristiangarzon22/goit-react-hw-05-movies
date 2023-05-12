import { Route,Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import Cast from "./Cast/Cast";
import MoviesDetails from "./MovieDetails/MovieDetails";
import Movies from "./Movies/Movies";
import Reviews from "./Reviews/Reviews";
import Home from "./Home/Home";
export const App = () => {
  return (
    <div>
    <Routes>
      
      <Route path="/" element={<SharedLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MoviesDetails />} />
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      <Route path="*" element={<h1>pagina no encontrada</h1>} />
      </Route>
    </Routes>
    </div>
  );
};
