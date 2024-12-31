import formatDuration from "../../../utils/formatDuration";
import { Movie } from "../useMovieDetails";
import BackgroundImage from "./BackgroundImage";
import Rating from "./Rating";

type MovieHeaderProps = {
  movie: Movie;
};

const MovieHeader = ({ movie }: MovieHeaderProps) => {
  return (
    <div className="w-full xl:mt-16 md:h-[400px] pt-sans-narrow-bold grid xl:max-w-[1056px] mx-auto">
      <BackgroundImage
        className="md:h-[400px] [&>div]:md:h-[400px] overflow-hidden"
        imageData={movie.background_image.data}
      />
      <div className="grid mb-4 self-end grid-center gap-y-4 w-full mx-auto px-3 xl:max-w-[1056px] lg:max-w-[700px]">
        <div className="gap gap-y-1 grid">
          <span className="uppercase text-sm text-primary">Film</span>
          <h2 className="text-grey-100 text-3xl">{movie.title}</h2>
          <div className="flex gap-x-4 font-semibold text-grey-200 text-sm ">
            <span>{movie.production_year}</span>
            <span>{formatDuration(+movie.duration_seconds)}</span>
          </div>
        </div>
        <Rating movieId={movie.id} />
      </div>
    </div>
  );
};

export default MovieHeader;
