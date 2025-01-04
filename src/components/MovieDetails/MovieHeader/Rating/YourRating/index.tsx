import getFilmwebUrl from "src/utils/getFilmwebUrl";
import RatingTile from "../RatingTile";
import useYourRating from "./useYourRating";

type YourRatingProps = {
  movieId: number;
};

const YourRating = ({ movieId }: YourRatingProps) => {
  const { data, isPending } = useYourRating({
    movieId,
    userId: import.meta.env.VITE_VERCEL_USER_ID,
  });

  if (!data || isPending) {
    return;
  }

  return (
    <RatingTile
      href={getFilmwebUrl(
        `/user/${import.meta.env.VITE_VERCEL_USER_ID}/film/${movieId}`
      )}
      header={
        <span className="text-2xl text-grey-200 lato-bold">{data}/10</span>
      }
      description="Twoja ocena"
    />
  );
};

export default YourRating;
