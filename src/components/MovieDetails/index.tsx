import { useMinWidthMediaQuery } from "../../utils/useMediaQuery";
import MovieHeader from "./MovieHeader";
import BackgroundImage from "./MovieHeader/BackgroundImage";

export type Movie = {
  title: string;
  productionYear: number;
  durationInSeconds: number;
  backgroundImageUrl: string;
};

const movie: Movie = {
  title: "Żółty szalik",
  productionYear: 2000,
  durationInSeconds: 59 * 60,
  backgroundImageUrl: "./background.jpg",
};

const MovieDetails = () => {
  const isLargeDesktop = useMinWidthMediaQuery(1280);

  return (
    <div className="grid relative">
      {isLargeDesktop && (
        <BackgroundImage
          url={movie.backgroundImageUrl}
          className="absolute w-screen -z-10 top-0 left-0 [&>img]:blur-xl"
        />
      )}
      <MovieHeader movie={movie} />
    </div>
  );
};

export default MovieDetails;
