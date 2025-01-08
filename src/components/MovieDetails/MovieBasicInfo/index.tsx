import getEncodedUrlId from "src/utils/getEncodedUrlId";
import getFilmwebUrl from "src/utils/getFilmwebUrl";
import Tag from "../Tag";
import { Movie } from "../useMovieDetails";
import Description from "./Description";
import DetailsItem from "./DetailsItem";
import useMovieAwards from "./useMovieAwards";
import useMovieCreators from "./useMovieCreators";
import useMovieTags from "./useMovieTags";

type MovieBasicInfoProps = {
  movie: Movie;
  isPending: boolean;
};

const MovieBasicInfo = ({ movie, isPending }: MovieBasicInfoProps) => {
  const { data: tags } = useMovieTags(movie.id);
  const { data: creators, isPending: areCreatorsPending } = useMovieCreators(
    movie.id
  );
  const { data: awards, isPending: areAwardsPending } = useMovieAwards(
    movie.id
  );

  const directors = creators?.filter(
    (item) => item.creator_role === "director"
  );
  const screenwriters = creators?.filter(
    (item) => item.creator_role === "screenwriter"
  );

  const encodedMovieUrlId = getEncodedUrlId([
    movie.title,
    movie.production_year,
    movie.id ?? "",
  ]);

  return (
    <section className="py-7 px-4 grid grid-flow-col gap-10 justify-start">
      <a
        aria-label="Movie posters"
        href={getFilmwebUrl(`/film/${encodedMovieUrlId}/posters`)}
      >
        <img
          className="border-[1px] border-grey-200"
          src={movie.poster_image_url}
          alt={movie.poster_image_alt_text}
        />
      </a>
      <div className="h-fit grid gap-y-4">
        <Description
          encodedMovieUrlId={encodedMovieUrlId}
          isPending={isPending}
          description={movie.description}
        />
        <div className="flex gap-x-2 mt-4">
          {tags?.map((item) => <Tag key={item.code} tag={item} />)}
        </div>
        <div className="grid gap-y-2">
          <DetailsItem
            key="directors"
            isPending={areCreatorsPending}
            label="reżyseria"
            items={directors?.map((director) => ({
              navigateTo: getFilmwebUrl(
                `/person/${getEncodedUrlId([director.creator_name, director.creator_id])}`
              ),
              text: director.creator_name,
            }))}
          />
          <DetailsItem
            key="screenwriters"
            isPending={areCreatorsPending}
            label="scenariusz"
            items={screenwriters?.map((screenwriter) => ({
              navigateTo: getFilmwebUrl(
                `/person/${getEncodedUrlId([screenwriter.creator_name, screenwriter.creator_id])}`
              ),
              text: screenwriter.creator_name,
            }))}
          />
          <DetailsItem
            key="production"
            isPending={isPending}
            items={[
              {
                text: movie.country_name,
                navigateTo: getFilmwebUrl(
                  `/ranking/film/country/${movie.country_name}`
                ),
              },
            ]}
            label="produkcja"
          />
          {awards && (
            <DetailsItem
              isPending={areAwardsPending}
              label="nagrody"
              items={[
                {
                  navigateTo: getFilmwebUrl(
                    `/film/${encodedMovieUrlId}/awards`
                  ),
                  text: `Film otrzymał ${awards?.[0].award_count} nagrodę i ${awards?.[0].nomination_count} nominację`,
                },
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieBasicInfo;
