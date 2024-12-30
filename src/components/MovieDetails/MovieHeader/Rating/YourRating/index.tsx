import RatingTile from "../RatingTile";

const yourRating = 4;

type YourRatingProps = {
  movieId: string;
};

const YourRating = ({ movieId }: YourRatingProps) => (
  <RatingTile
    href="https://www.filmweb.pl/user/3706689/film/32453"
    header={<a className="text-2xl text-grey-200 lato-bold">{yourRating}/10</a>}
    description="Twoja ocena"
  />
);

export default YourRating;
