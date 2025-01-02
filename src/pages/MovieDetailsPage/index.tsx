import MovieDetails from "src/components/MovieDetails";
import useSetPageTitle from "src/utils/useSetPageTitle";

const MovieDetailsPage = () => {
  useSetPageTitle();

  return <MovieDetails />;
};

export default MovieDetailsPage;
