import StarOutline from "src/assets/starOutline.svg?react";
import { classNames } from "src/utils/classNames.helper";
import ratingMap from "src/utils/ratingMap";

type StarsProps = {
  userVote: number;
};

const Stars = ({ userVote }: StarsProps) => {
  return (
    <ul className="flex">
      {Object.keys(ratingMap).map((key) => {
        const vote = +key;

        return (
          <StarOutline
            key={key}
            aria-hidden
            className={classNames(
              "h-[18px] w-[18px]",
              userVote >= vote
                ? "fill-primary stroke-primary"
                : "fill-grey-200 stroke-grey-200"
            )}
          />
        );
      })}
    </ul>
  );
};

export default Stars;
