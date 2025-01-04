import { useState } from "react";
import Drawer from "../../../Drawer";
import formatVotesCount from "../formatVotesCount";
import RatingTile from "../RatingTile";
import useMovieScoreSummary from "../useMovieScoreSummary";
import AverageRating from "./AverageRating";
import CommunityRatingDrawerContent from "./CommunityRatingDrawerContent";

type CommunityRatingProps = {
  movieId: number;
};

const CommunityRating = ({ movieId }: CommunityRatingProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const { data, isPending } = useMovieScoreSummary({ movieId });

  if (isPending) {
    return null;
  }

  return (
    <span>
      <RatingTile
        onClick={toggleDrawer}
        header={
          <AverageRating
            value={data?.avg_score !== undefined ? +data?.avg_score : undefined}
          />
        }
        description={
          data?.scores_count
            ? formatVotesCount(+data?.scores_count)
            : "Brak ocen"
        }
        aria-label="Otwórz szczegóły ocen"
      />
      <Drawer
        title="Oceny użytkowników"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <CommunityRatingDrawerContent movieId={movieId} />
      </Drawer>
    </span>
  );
};

export default CommunityRating;
