import arrayBufferToBase64 from "src/utils/arrayBufferToBase64";
import Tag from "../Tag";
import { Movie } from "../useMovieDetails";
import DetailsItem from "./DetailsItem";
import useMovieAwards from "./useMovieAwards";
import useMovieCreators from "./useMovieCreators";
import useMovieTags from "./useMovieTags";

type MovieBasicInfoProps = {
  movie: Movie;
};

const MovieBasicInfo = ({ movie }: MovieBasicInfoProps) => {
  const { data: tags } = useMovieTags(movie.id);
  const { data: creators } = useMovieCreators(movie.id);
  const { data: awards } = useMovieAwards(movie.id);

  const directors = creators
    ?.filter((item) => item.creator_role === "director")
    .map((item) => item.name);
  const screenwriters = creators
    ?.filter((item) => item.creator_role === "screenwriter")
    .map((item) => item.name);

  const imageFromBuffer = arrayBufferToBase64(movie?.poster_image.data);

  return (
    <section className="py-7 px-4 grid grid-flow-col gap-10 justify-start">
      <a
        aria-label="Movie posters"
        href="https://www.filmweb.pl/film/%C5%BB%C3%B3%C5%82ty+szalik-2000-32453/posters"
      >
        <img
          className="border-[1px] border-grey-200"
          src={`data:image/webp;base64,${imageFromBuffer}`}
          alt="Image alt sht"
        />
      </a>
      <div className="h-fit grid gap-y-4">
        <div className="grid gap-y-1 text-base">
          <p className="text-grey-600">{movie.description}</p>
          <a href="sdfsdfsfsfd" className="text-link">
            zobacz pełny opis
          </a>
        </div>
        <div className="flex gap-x-2 mt-4">
          {tags?.map((item) => <Tag key={item.code} tag={item} />)}
        </div>
        <div className="grid gap-y-2">
          <DetailsItem
            navigateTo="https://www.filmweb.pl/person/Janusz+Morgenstern-344"
            label="reżyseria"
            text={directors?.join(", ")}
          />
          <DetailsItem
            navigateTo="https://www.filmweb.pl/person/Jerzy+Pilch-56094"
            label="scenariusz"
            text={screenwriters?.join(", ")}
          />
          <DetailsItem
            navigateTo="https://www.filmweb.pl/ranking/film/country/42"
            label="produkcja"
            text={movie.country_name}
          />
          {awards && (
            <DetailsItem
              navigateTo="https://www.filmweb.pl/film/%C5%BB%C3%B3%C5%82ty+szalik-2000-32453/awards"
              label="nagrody"
              text={`Film otrzymał ${awards?.[0].award_count} nagrodę i ${awards?.[0].nomination_count} nominację`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieBasicInfo;
