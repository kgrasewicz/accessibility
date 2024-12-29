import Star from "src/assets/star.svg?react";
import Bar from "./Bar";

type CommunityRatingDistributionProps = {
  movieId: string;
};

const distribution = [
  { value: 10, votesPercentage: 6 },
  { value: 9, votesPercentage: 16 },
  { value: 8, votesPercentage: 40 },
];

const CommunityRatingDistribution = ({
  movieId,
}: CommunityRatingDistributionProps) => {
  const maxDistributionPercentage = Math.max(
    ...distribution.map((item) => item.votesPercentage)
  );

  return (
    <ul className="grid gap-y-5 py-4">
      {distribution.map((item) => (
        <li className="flex gap-x-4 items-center" key={item.value}>
          <div className="flex items-center gap-x-2 text-sm w-10">
            <Star className="text-primary h-4 w-4" />
            {item.value}
          </div>
          <Bar
            percentage={
              (item.votesPercentage * 100) / maxDistributionPercentage
            }
          />
          <span className="text-xs lato-regular text-grey-300 w-8">
            {item.votesPercentage}%
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CommunityRatingDistribution;
