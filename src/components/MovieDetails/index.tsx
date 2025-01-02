import { useParams } from "react-router";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieHeader from "./MovieHeader";
import RatingPanel from "./RatingPanel";
import useMovieDetails from "./useMovieDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data: movie, isPending } = useMovieDetails(Number(movieId));

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!movie?.id) {
    return;
  }

  return (
    <div className="grid overflow-x-clip relative">
      <MovieHeader movie={movie} />
      <div className="bg-grey-100 relative w-full flex-col lg:flex-row flex gap-4 md:max-w-[700px] lg:max-w-[1056px] mx-auto">
        <MovieBasicInfo movie={movie} />
        <RatingPanel movieId={movie?.id} />
      </div>
    </div>
  );
};

export default MovieDetails;
