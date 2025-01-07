import { userId } from "src/utils/consts";
import getFilmwebUrl from "src/utils/getFilmwebUrl";
import RatingTile from "../RatingTile";
import useYourRating from "./useYourRating";

type YourRatingProps = {
  movieId: number;
};

const YourRating = ({ movieId }: YourRatingProps) => {
  const { data, isPending } = useYourRating({
    movieId,
    userId,
  });

  if (!data || isPending) {
    return;
  }

  return (
    <RatingTile
      href={getFilmwebUrl(`/user/${userId}/film/${movieId}`)}
      header={
        <span className="text-2xl text-grey-200 lato-bold">{data}/10</span>
      }
      description="Twoja ocena"
    />
  );
};

export default YourRating;
