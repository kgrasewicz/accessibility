import { useEffect } from "react";
import { useParams } from "react-router";
import useMovieDetails from "../components/MovieDetails/useMovieDetails";

const useSetPageTitle = () => {
  const { movieId } = useParams();
  const { data: movie, isPending } = useMovieDetails(Number(movieId));

  useEffect(() => {
    if (!movie?.title || isPending) {
      return;
    }

    document.title = `${movie.title} - Filmweb`;
  }, [movie?.title, isPending]);
};

export default useSetPageTitle;
