import formatDuration from "../../../utils/formatDuration";
import { Movie } from "../useMovieDetails";
import BackgroundImage from "./BackgroundImage";
import Rating from "./Rating";

type MovieHeaderProps = {
  movie: Movie;
};

const MovieHeader = ({ movie }: MovieHeaderProps) => {
  if (!movie.id) {
    return null;
  }

  return (
    <div className="w-full md:h-[400px] pt-sans-narrow-bold grid lg:bg-grey-900">
      <BackgroundImage
        altText={movie.background_image_alt_text}
        imageUrl={movie.background_image_url}
      />
      <div className="grid mb-4 relative self-end grid-center gap-y-4 w-full mx-auto px-3 lg:max-w-[1056px] md:max-w-[700px]">
        <div className="gap gap-y-1 grid">
          <span className="uppercase text-sm text-primary">Film</span>
          <h1 className="text-grey-100 text-3xl">{movie.title}</h1>
          <div className="flex gap-x-4 font-semibold text-grey-200 text-sm ">
            <h2>{movie.production_year}</h2>
            <span>{formatDuration(+movie.duration_seconds)}</span>
          </div>
        </div>
        <Rating movieId={movie.id} />
      </div>
    </div>
  );
};

export default MovieHeader;
