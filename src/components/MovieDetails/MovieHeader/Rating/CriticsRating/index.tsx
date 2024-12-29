import { useState } from "react";
import Drawer from "../../../Drawer";
import CommunityRatingDrawerContent from "../CommunityRating/CommunityRatingDrawerContent";
import RatingTile from "../RatingTile";

type CriticsRating = {
  Count: number;
  AverageRating: number;
};

const criticsRating: CriticsRating = {
  Count: 28,
  AverageRating: 6.9,
};

type CriticsRatingProps = {
  movieId: string;
};

const CriticsRating = ({ movieId }: CriticsRatingProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <RatingTile
        header={
          <div className="rounded w-fit bg-secondary h-8 px-2 text-xl text-grey-200 lato-bold">
            {criticsRating.AverageRating}
          </div>
        }
        description={`${criticsRating.Count} krytyków`}
      />
      <Drawer title="Oceny krytyków" open={isDrawerOpen} onClose={toggleDrawer}>
        <CommunityRatingDrawerContent movieId={movieId} />
      </Drawer>
    </>
  );
};

export default CriticsRating;
