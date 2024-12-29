import { useState } from "react";
import Drawer from "../../../Drawer";
import RatingTile from "../RatingTile";
import AverageRating from "./AverageRating";
import CommunityRatingDrawerContent from "./CommunityRatingDrawerContent";

type CommunityRating = {
  Count: number;
  AverageRating: number;
};

const communityRating: CommunityRating = {
  Count: 49000,
  AverageRating: 7.7,
};

type CommunityRatingProps = {
  movieId: string;
};

const CommunityRating = ({ movieId }: CommunityRatingProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <RatingTile
        onClick={toggleDrawer}
        header={<AverageRating value={communityRating.AverageRating} />}
        description={`${Math.round(communityRating.Count / 1000)} tys. ocen`}
      />
      <Drawer
        title="Oceny użytkowników"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <CommunityRatingDrawerContent movieId={movieId} />
      </Drawer>
    </>
  );
};

export default CommunityRating;
