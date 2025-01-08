import ChevronRight from "src/assets/chevronRight.svg?react";
import { classNames } from "src/utils/classNames.helper";
import styles from "./styles.module.scss";

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
  photosUrls?: string[];
};

const Photos = ({ movieName, photosUrls }: PhotosProps) => {
  if (!photosUrls) {
    return null;
  }

  const photos = [...photosUrls];

  photos.slice(0, 5);

  return (
    <section className="grid gap-y-6 py-7 px-4">
      <h2 className="lato-bold text-xl">
        <a
          className="flex gap-x-1 items-center"
          href={`https://www.filmweb.pl/film/${movieName}/photos`}
        >
          Zdjęcia filmu {movieName} <ChevronRight aria-hidden className="h-3" />
        </a>
      </h2>
      <ul className={classNames("grid gap-[2px]", styles["photos"])}>
        {photos.map((url, index) => (
          <li className="relative" key={url} style={{ gridArea: areas[index] }}>
            <a
              className={classNames(
                index === 0 || index === photos.length - 1
                  ? "pt-[67%]"
                  : "pt-[100%]",
                "relative block h-full w-full overflow-hidden"
              )}
              target="_blank"
              href={url}
            >
              <img
                className="h-auto min-h-full w-full hover:scale-125 absolute top-0 left-0 transition-all duration-500 object-cover"
                src={url}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Photos;
