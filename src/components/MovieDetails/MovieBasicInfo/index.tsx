import { Movie } from "..";
import Tag from "../Tag";
import DetailsItem from "./DetailsItem";

type MovieBasicInfoProps = {
  movie: Movie;
};

const MovieBasicInfo = ({ movie }: MovieBasicInfoProps) => {
  return (
    <section className="py-7 px-4 grid grid-flow-col gap-10 justify-start">
      <a
        aria-label="Movie posters"
        href="https://www.filmweb.pl/film/%C5%BB%C3%B3%C5%82ty+szalik-2000-32453/posters"
      >
        <img
          className="border-[1px] border-grey-200"
          src={movie.PosterImageUrl}
          alt="Image alt sht"
        />
      </a>
      <div className="h-fit grid gap-y-4">
        <div className="grid gap-y-1 text-base">
          <p className="text-grey-600">{movie.Description}</p>
          <a href="sdfsdfsfsfd" className="text-link">
            zobacz pełny opis
          </a>
        </div>
        <div className="flex gap-x-2 mt-4">
          {movie.Tags.map((item) => (
            <Tag key={item.Code} tag={item} />
          ))}
        </div>
        <div className="grid gap-y-2">
          <DetailsItem
            navigateTo="https://www.filmweb.pl/person/Janusz+Morgenstern-344"
            label="reżyseria"
            text={movie.Director.Name}
          />
          <DetailsItem
            navigateTo="https://www.filmweb.pl/person/Jerzy+Pilch-56094"
            label="scenariusz"
            text={movie.Screenwriter.Name}
          />
          <DetailsItem
            navigateTo="https://www.filmweb.pl/ranking/film/country/42"
            label="produkcja"
            text={movie.ProductionCountry.Name}
          />
          {movie.Awards && (
            <DetailsItem
              navigateTo="https://www.filmweb.pl/film/%C5%BB%C3%B3%C5%82ty+szalik-2000-32453/awards"
              label="nagrody"
              text={`Film otrzymał ${movie.Awards?.Count} nagrodę i ${movie.Awards?.NominationsCount} nominację`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieBasicInfo;
