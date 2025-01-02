import { useState } from "react";
import formatScore from "src/utils/formatScore";
import Drawer from "../../../Drawer";
import CommunityRatingDrawerContent from "../CommunityRating/CommunityRatingDrawerContent";
import RatingTile from "../RatingTile";
import useMovieScoreSummary from "../useMovieScoreSummary";

type CriticsRatingProps = {
  movieId: number;
};

const CriticsRating = ({ movieId }: CriticsRatingProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const { data } = useMovieScoreSummary({ movieId });

  if (!data?.average_critic_score) {
    return null;
  }

  return (
    <>
      <RatingTile
        header={
          <div className="rounded w-fit bg-secondary h-8 px-2 text-xl text-grey-200 lato-bold">
            {formatScore(+data?.average_critic_score)}
          </div>
        }
        description={`${data?.critic_scores_count} krytyków`}
      />
      <Drawer title="Oceny krytyków" open={isDrawerOpen} onClose={toggleDrawer}>
        <CommunityRatingDrawerContent movieId={movieId} />
      </Drawer>
    </>
  );
};

export default CriticsRating;
