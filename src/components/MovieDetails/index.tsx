import { useMinWidthMediaQuery } from "../../utils/useMediaQuery";
import MovieHeader from "./MovieHeader";
import BackgroundImage from "./MovieHeader/BackgroundImage";

export type Movie = {
  Id: string;
  Title: string;
  ProductionYear: number;
  DurationInSeconds: number;
  BackgroundImageUrl: string;
};

const movie: Movie = {
  Id: "1",
  Title: "Żółty szalik",
  ProductionYear: 2000,
  DurationInSeconds: 59 * 60,
  BackgroundImageUrl: "./background.jpg",
};

const MovieDetails = () => {
  const isLargeDesktop = useMinWidthMediaQuery(1280);

  return (
    <div className="grid overflow-x-clip relative">
      {isLargeDesktop && (
        <BackgroundImage
          url={movie.BackgroundImageUrl}
          className="absolute w-screen -z-10 top-0 left-0 [&>img]:blur-xl"
        />
      )}
      <MovieHeader movie={movie} />
    </div>
  );
};

export default MovieDetails;
