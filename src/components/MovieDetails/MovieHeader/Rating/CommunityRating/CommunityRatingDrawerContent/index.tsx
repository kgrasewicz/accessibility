import Eye from "../../../../../../assets/eye.svg?react";
import formatVotesCount from "../../formatVotesCount";
import RatingTile from "../../RatingTile";
import useMovieScoreSummary from "../../useMovieScoreSummary";
import AverageRating from "../AverageRating";
import CommunityRatingDistribution from "./CommunityRatingDistribution";

type CommunityRatingDrawerContentProps = {
  movieId: number;
};

const CommunityRatingDrawerContent = ({
  movieId,
}: CommunityRatingDrawerContentProps) => {
  const { data } = useMovieScoreSummary({ movieId });

  return (
    <div className="grid">
      <div className="border-b-[1px] border-grey-200 flex">
        <div className="flex gap-x-4 py-4">
          <RatingTile
            layout="horizontal"
            header={
              <AverageRating
                className="text-grey-600"
                value={Number(data?.avg_score)}
              />
            }
            description={
              <span>
                {data?.scores_count
                  ? formatVotesCount(+data.scores_count)
                  : "Brak ocen"}
              </span>
            }
            descriptionClassName="text-grey-300"
          />
          <RatingTile
            layout="horizontal"
            header={<Eye className="h-6 w-6 text-secondary mr-2" />}
            description={<span>{data?.wants_to_see_count} chcę zobaczyć</span>}
            descriptionClassName="text-grey-300"
          />
        </div>
      </div>
      <CommunityRatingDistribution movieId={movieId} />
    </div>
  );
};

export default CommunityRatingDrawerContent;
