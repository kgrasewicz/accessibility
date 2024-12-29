import { Movie } from "..";
import formatDuration from "../../../utils/formatDuration";
import BackgroundImage from "./BackgroundImage";
import Rating from "./Rating";

type MovieHeaderProps = {
  movie: Movie;
};

const MovieHeader = ({ movie }: MovieHeaderProps) => {
  return (
    <div className="md:h-[400px] pt-sans-narrow-bold grid xl:max-w-[1056px] mx-auto">
      <BackgroundImage
        className="md:h-[400px] [&>div]:md:h-[400px] overflow-hidden"
        url={movie.BackgroundImageUrl}
      />
      <div className="grid mb-4 self-end grid-center gap-y-4 w-full mx-auto px-[10px] lg:max-w-[700px]">
        <div className="gap gap-y-1 grid">
          <span className="uppercase text-sm text-primary">Film</span>
          <h2 className="text-grey-100 text-3xl">{movie.Title}</h2>
          <div className="flex gap-x-4 font-semibold text-grey-200 text-sm ">
            <span>{movie.ProductionYear}</span>
            <span>{formatDuration(movie.DurationInSeconds)}</span>
          </div>
        </div>
        <Rating movieId={movie.Id} />
      </div>
    </div>
  );
};

export default MovieHeader;
