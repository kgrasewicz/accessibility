import { useParams } from "react-router";
import LoadContent from "../LoadContent";
import FullScreenError from "../LoadContent/FullScreenError";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieHeader from "./MovieHeader";
import Photos from "./Photos";
import RatingPanel from "./RatingPanel";
import useMovieDetails from "./useMovieDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const parsedMovieId = Number(movieId);

  const { data: movie, isPending, isError } = useMovieDetails(parsedMovieId);

  return (
    <LoadContent
      errorElement={<FullScreenError />}
      className="w-full h-screen"
      isError={!movie?.id || isError}
      isLoading={isPending}
    >
      {movie && (
        <div className="grid overflow-x-clip relative">
          <MovieHeader movie={movie} />
          <div className="bg-grey-100 relative w-full flex-col lg:flex-row flex gap-4 md:max-w-[700px] lg:max-w-[1056px] mx-auto">
            <div className="grid gap-y-6">
              <MovieBasicInfo isPending={isPending} movie={movie} />
              <Photos
                movieName={movie.title}
                movieId={parsedMovieId}
                movieProductionYear={movie.production_year}
              />
            </div>
            <RatingPanel movieId={movie.id} />
          </div>
        </div>
      )}
    </LoadContent>
  );
};

export default MovieDetails;
