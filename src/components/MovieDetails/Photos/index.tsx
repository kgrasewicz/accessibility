import ChevronRight from "src/assets/chevronRight.svg?react";
import { classNames } from "src/utils/classNames.helper";
import getEncodedUrlId from "src/utils/getEncodedUrlId";
import styles from "./styles.module.scss";
import useMoviePhotos from "./useMoviePhotos";

const areas = [
  "vertical1",
  "square1",
  "square2",
  "square3",
  "square4",
  "vertical2",
];

type PhotosProps = {
  movieName: string;
  movieId?: number;
  movieProductionYear?: string;
};

const Photos = ({ movieName, movieId, movieProductionYear }: PhotosProps) => {
  const { data } = useMoviePhotos(movieId);

  if (!data || !data.length) {
    return null;
  }

  const photos = [...data].slice(0, 6);

  const encodedMovieUrlId = getEncodedUrlId([
    movieName,
    movieProductionYear ?? "",
    movieId ?? "",
  ]);

  return (
    <section className="grid gap-y-6 py-7 px-4">
      <h2 className="lato-bold text-xl">
        <a
          className="flex gap-x-1 items-center"
          href={`https://www.filmweb.pl/film/${encodedMovieUrlId}/photos`}
        >
          Zdjęcia filmu {movieName} <ChevronRight aria-hidden className="h-3" />
        </a>
      </h2>
      <div className="overflow-x-scroll lg:overflow-auto overflow-y-hidden pb-8">
        <ul
          className={classNames(
            "lg:grid inline-flex gap-[2px]",
            styles["photos"]
          )}
        >
          {photos.map((photo, index) => (
            <li
              className="relative lg:w-auto lg:h-auto w-[190px] h-[190px]"
              key={photo.url}
              style={{ gridArea: areas[index] }}
            >
              <a
                className={classNames(
                  index === 0 || index === photos.length - 1
                    ? "pt-[67%]"
                    : "pt-[100%]",
                  "relative block h-full w-full overflow-hidden"
                )}
                target="_blank"
                href={photo.url}
              >
                <img
                  className="h-auto min-h-full w-full hover:scale-125 absolute top-0 left-0 transition-all duration-500 object-cover"
                  src={photo.url}
                  alt={photo.alt_text}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Photos;
