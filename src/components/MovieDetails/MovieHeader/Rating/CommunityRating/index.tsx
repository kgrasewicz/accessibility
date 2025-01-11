import { useState } from "react";
import Drawer from "../../../Drawer";
import formatVotesCount from "../formatVotesCount";
import RatingTile from "../RatingTile";
import useMovieScoreSummary from "../useMovieScoreSummary";
import AverageRating from "./AverageRating";
import CommunityRatingDrawerContent from "./CommunityRatingDrawerContent";

const communityRatingDrawerId = "communityRatingDrawer";
type CommunityRatingProps = {
  movieId: number;
};

const CommunityRating = ({ movieId }: CommunityRatingProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const { data, isPending } = useMovieScoreSummary({ movieId });

  const hasData = data?.scores_count || data?.wants_to_see_count;

  if (isPending) {
    return null;
  }

  return (
    <span>
      <RatingTile
        aria-expanded={isDrawerOpen}
        aria-controls={communityRatingDrawerId}
        onClick={hasData ? toggleDrawer : undefined}
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
        aria-label="Szczegóły ocen"
      />
      {hasData && (
        <Drawer
          id={communityRatingDrawerId}
          title="Oceny użytkowników"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <CommunityRatingDrawerContent movieId={movieId} />
        </Drawer>
      )}
    </span>
  );
};

export default CommunityRating;
