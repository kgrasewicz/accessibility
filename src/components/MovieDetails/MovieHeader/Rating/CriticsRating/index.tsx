import { useState } from "react";
import formatScore from "src/utils/formatScore";
import Drawer from "../../../Drawer";
import RatingTile from "../RatingTile";
import useMovieScoreSummary from "../useMovieScoreSummary";
import CriticsRatingDrawerContent from "./CriticsRatingDrawerContent";

const criticsRatingDrawerId = "criticsRatingDrawer";

type CriticsRatingProps = {
  movieId: number;
};

const CriticsRating = ({ movieId }: CriticsRatingProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const { data, isPending } = useMovieScoreSummary({ movieId });

  if (!data?.average_critic_score || isPending) {
    return null;
  }

  return (
    <>
      <RatingTile
        aria-expanded={isDrawerOpen}
        aria-controls={criticsRatingDrawerId}
        onClick={toggleDrawer}
        header={
          <div className="rounded w-fit bg-secondary h-8 px-2 text-xl text-grey-200 lato-bold">
            {formatScore(+data?.average_critic_score)}
          </div>
        }
        description={`${data?.critic_scores_count} krytyków`}
        aria-label="Szczegóły ocen krytyków"
      />
      <Drawer
        id={criticsRatingDrawerId}
        title="Oceny krytyków"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <CriticsRatingDrawerContent movieId={movieId} />
      </Drawer>
    </>
  );
};

export default CriticsRating;
