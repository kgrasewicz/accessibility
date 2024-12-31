import CommunityRating from "./CommunityRating";
import CriticsRating from "./CriticsRating";
import YourRating from "./YourRating";

type RatingProps = {
  movieId: string;
};

const Rating = ({ movieId }: RatingProps) => {
  return (
    <div className="flex gap-x-8">
      <CommunityRating movieId={movieId} />
      <CriticsRating movieId={movieId} />
      <YourRating movieId={movieId} />
    </div>
  );
};

export default Rating;
