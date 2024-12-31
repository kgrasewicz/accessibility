import { useState } from "react";
import Drawer from "../../../Drawer";
import RatingTile from "../RatingTile";
import useMovieScoreSummary from "../useMovieScoreSummary";
import AverageRating from "./AverageRating";
import CommunityRatingDrawerContent from "./CommunityRatingDrawerContent";

type CommunityRatingProps = {
  movieId: string;
};

const CommunityRating = ({ movieId }: CommunityRatingProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const { data } = useMovieScoreSummary({ movieId });

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
            ? `${Math.round(+data?.scores_count / 1000)} tys. ocen`
            : "Brak ocen"
        }
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
