import RatingTile from "../RatingTile";
import useYourRating from "./useYourRating";

type YourRatingProps = {
  movieId: string;
};

const YourRating = ({ movieId }: YourRatingProps) => {
  const { data } = useYourRating({
    movieId,
    userId: "f3b1afb3-c94c-4f96-a6c2-ecf6b092b5d9",
  });

  if (!data) {
    return;
  }

  return (
    <RatingTile
      href="https://www.filmweb.pl/user/3706689/film/32453"
      header={
        <span className="text-2xl text-grey-200 lato-bold">{data}/10</span>
      }
      description="Twoja ocena"
    />
  );
};

export default YourRating;
