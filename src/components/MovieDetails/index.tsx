import { useParams } from "react-router";
import Loader from "../Loader";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieHeader from "./MovieHeader";
import RatingPanel from "./RatingPanel";
import useMovieDetails from "./useMovieDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data: movie, isPending } = useMovieDetails(Number(movieId));

  if (isPending) {
    return <Loader className="fixed top-0 left-0" />;
  }

  if (!movie?.id) {
    return <div>error page</div>;
  }

  return (
    <div className="grid overflow-x-clip relative">
      <MovieHeader movie={movie} />
      <div className="bg-grey-100 relative w-full flex-col lg:flex-row flex gap-4 md:max-w-[700px] lg:max-w-[1056px] mx-auto">
        <MovieBasicInfo isPending={isPending} movie={movie} />
        <RatingPanel movieId={movie?.id} />
      </div>
    </div>
  );
};

export default MovieDetails;
