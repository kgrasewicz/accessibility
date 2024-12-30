import { useMinWidthMediaQuery } from "../../utils/useMediaQuery";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieHeader from "./MovieHeader";
import BackgroundImage from "./MovieHeader/BackgroundImage";
import RatingPanel from "./RatingPanel";

type Awards = { Count?: number; NominationsCount?: number };
type Country = { Id: string; Name: string };
type Profile = { Id: string; Name: string };

export type Tag = { Code: string; Label: string };
const tags: Tag[] = [
  { Code: "drama", Label: "Dramat" },
  { Code: "christmas", Label: "Świąteczny" },
];

export type Movie = {
  Id: string;
  Title: string;
  ProductionYear: number;
  DurationInSeconds: number;
  BackgroundImageUrl: string;
  Description: string;
  PosterImageUrl: string;
  Tags: Tag[];
  Director: Profile;
  ProductionCountry: Country;
  Screenwriter: Profile;
  Awards?: Awards;
};

const movie: Movie = {
  Id: "1",
  Title: "Żółty szalik",
  ProductionYear: 2000,
  DurationInSeconds: 59 * 60,
  BackgroundImageUrl: "./background.jpg",
  Description:
    "Szanowany dyrektor firmy od lat zmaga się z nałogiem alkoholowym.",
  Tags: tags,
  PosterImageUrl: "./poster.webp",
  Director: { Id: "sdfgdgdsfg", Name: "Janust Morgestern" },
  ProductionCountry: { Id: "sdfsdf", Name: "Poland" },
  Screenwriter: { Id: "sdf", Name: "Jerzy Pilch" },
  Awards: { Count: 1, NominationsCount: 1 },
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
      <div className="bg-grey-100 relative w-full flex-col lg:flex-row flex gap-4 lg:max-w-[700px] xl:max-w-[1056px] mx-auto">
        <MovieBasicInfo movie={movie} />
        <RatingPanel movieId={movie.Id} />
      </div>
    </div>
  );
};

export default MovieDetails;
