import Avatar from "src/components/MovieDetails/Avatar";
import { classNames } from "src/utils/classNames.helper";
import getFilmwebUrl from "src/utils/getFilmwebUrl";
import { CriticMovieData } from "../useUserMovieMetadata";
import Stars from "./Stars";

type CriticReviewTileProps = { data: CriticMovieData; className?: string };

const CriticReviewTile = ({ data, className }: CriticReviewTileProps) => {
  const profileUrl = getFilmwebUrl(`/user/${data.name}`);

  return (
    <li className={classNames(className, "grid gap-y-2 py-3")}>
      <a href={profileUrl} className="flex gap-x-3">
        <Avatar name={data.name} />
        <span className="text-base lato-regular">{data.name}</span>
      </a>
      <div className="flex gap-x-1 items-center">
        <span className="lato-regular text-base text-grey-900">
          {data.score}
        </span>
        <Stars userVote={data.score} />
      </div>
      {data.review && (
        <p className="bg-[#f8f8f8] mt-1 rounded p-2 text-sm lato-regular">
          {data.review}
        </p>
      )}
    </li>
  );
};

export default CriticReviewTile;
