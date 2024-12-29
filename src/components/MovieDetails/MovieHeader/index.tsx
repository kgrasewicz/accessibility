import { Movie } from "..";
import formatDuration from "../../../utils/formatDuration";
import BackgroundImage from "./BackgroundImage";

type MovieHeaderProps = {
  movie: Movie;
};

const MovieHeader = ({ movie }: MovieHeaderProps) => {
  return (
    <div className="md:h-[400px] pt-sans-narrow-bold grid xl:max-w-[1056px] mx-auto">
      <BackgroundImage
        className="md:h-[400px] overflow-hidden"
        url={movie.backgroundImageUrl}
      />
      <div className="gap gap-y-1 mx-auto py-8 px-[10px] w-full lg:max-w-[700px] grid grid-center self-end">
        <span className="uppercase text-sm text-primary">Film</span>
        <h2 className="text-grey-100 text-3xl">{movie.title}</h2>
        <div className="flex gap-x-4 font-semibold text-grey-200 text-sm ">
          <span>{movie.productionYear}</span>
          <span>{formatDuration(movie.durationInSeconds)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
