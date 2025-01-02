import Eye from "../../../../../../assets/eye.svg?react";
import RatingTile from "../../RatingTile";
import AverageRating from "../AverageRating";
import CommunityRatingDistribution from "./CommunityRatingDistribution";

type CommunityRating = {
  Count: number;
  AverageRating: number;
  WantToSeeCount: number;
};

const communityRating: CommunityRating = {
  Count: 49000,
  AverageRating: 7.7,
  WantToSeeCount: 17030,
};

type CommunityRatingDrawerContentProps = {
  movieId: number;
};

const CommunityRatingDrawerContent = ({
  movieId,
}: CommunityRatingDrawerContentProps) => {
  return (
    <div className="grid">
      <div className="border-b-[1px] border-grey-200 flex">
        <div className="flex gap-x-4 py-4">
          <RatingTile
            layout="horizontal"
            header={
              <AverageRating
                className="text-grey-600"
                value={communityRating.AverageRating}
              />
            }
            description={
              <span>
                {communityRating.Count}
                <br /> oceny
              </span>
            }
            descriptionClassName="text-grey-300"
          />
          <RatingTile
            layout="horizontal"
            header={<Eye className="h-6 w-6 text-secondary mr-2" />}
            description={
              <span>
                {communityRating.WantToSeeCount}
                <br /> chcę zobaczyć
              </span>
            }
            descriptionClassName="text-grey-300"
          />
        </div>
      </div>
      <CommunityRatingDistribution movieId={movieId} />
    </div>
  );
};

export default CommunityRatingDrawerContent;
