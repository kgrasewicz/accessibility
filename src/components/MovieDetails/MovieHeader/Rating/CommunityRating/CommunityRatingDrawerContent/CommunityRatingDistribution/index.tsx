import Star from "src/assets/star.svg?react";
import ratingMap from "src/utils/ratingMap";
import Bar from "./Bar";
import useMovieScoreDistribution from "./useMovieScoreDistribution";

type CommunityRatingDistributionProps = {
  movieId: number;
};

const CommunityRatingDistribution = ({
  movieId,
}: CommunityRatingDistributionProps) => {
  const { data } = useMovieScoreDistribution({ movieId });

  const maxDistributionPercentage = Math.max(
    ...(data?.map((item) => item.score_percentage) ?? [])
  );

  return (
    <ul className="grid gap-y-5 py-4">
      {Object.keys(ratingMap)?.map((key) => {
        const matchedRecord = data?.find(
          (item) => item.score.toString() === key
        );

        return (
          <li className="flex gap-x-4 items-center" key={key}>
            <div className="flex items-center gap-x-2 text-sm w-10">
              <Star className="text-primary h-4 w-4" />
              {key}
            </div>
            <Bar
              percentage={
                matchedRecord?.score_percentage
                  ? (matchedRecord.score_percentage * 100) /
                    maxDistributionPercentage
                  : 0
              }
            />
            <span className="text-xs lato-regular text-grey-300 w-8">
              {matchedRecord?.score_percentage ?? "-"}%
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default CommunityRatingDistribution;
