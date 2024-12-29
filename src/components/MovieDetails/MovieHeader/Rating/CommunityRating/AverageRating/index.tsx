import Star from "../../../../../../assets/star.svg?react";
import { classNames } from "../../../../../../utils/classNames.helper";

type AverageRatingProps = {
  value: number;
  className?: string;
};

const AverageRating = ({ value, className }: AverageRatingProps) => {
  return (
    <div className="flex items-center gap-x-[6px]">
      <Star className="text-primary" />
      <span
        className={classNames("text-2xl text-grey-200 lato-bold", className)}
      >
        {value}
      </span>
    </div>
  );
};

export default AverageRating;
