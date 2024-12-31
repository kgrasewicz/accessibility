import { useMinWidthMediaQuery } from "../../utils/useMediaQuery";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieHeader from "./MovieHeader";
import BackgroundImage from "./MovieHeader/BackgroundImage";
import RatingPanel from "./RatingPanel";
import useMovieDetails from "./useMovieDetails";

const MovieDetails = () => {
  const isLargeDesktop = useMinWidthMediaQuery(1280);

  const { data: movie, isPending } = useMovieDetails("32453");

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!movie?.id) {
    return;
  }

  return (
    <div className="grid overflow-x-clip relative">
      {isLargeDesktop && (
        <BackgroundImage
          imageData={movie?.background_image.data}
          className="absolute w-screen -z-10 top-0 left-0 [&>img]:blur-xl"
        />
      )}
      <MovieHeader movie={movie} />
      <div className="bg-grey-100 relative w-full flex-col lg:flex-row flex gap-4 lg:max-w-[700px] xl:max-w-[1056px] mx-auto">
        <MovieBasicInfo movie={movie} />
        <RatingPanel movieId={movie?.id} />
      </div>
    </div>
  );
};

export default MovieDetails;
