import { Fragment } from "react";
import StarOutline from "src/assets/starOutline.svg?react";
import { classNames } from "src/utils/classNames.helper";
import ratingMap from "src/utils/ratingMap";

const activeClassName = "fill-primary stroke-primary";

type StarsInputProps = {
  hoveredVote?: number;
  currentVote?: number;
  setHoveredVote: (value?: number) => void;
  setCurrentVote: (value?: number) => void;
  feedbackElementId: string;
};

const StarsInput = ({
  hoveredVote,
  currentVote,
  setHoveredVote,
  setCurrentVote,
  feedbackElementId,
}: StarsInputProps) => {
  return (
    <fieldset className="flex gap-x-1">
      <legend className="sr-only">Twoja ocena</legend>
      {Object.keys(ratingMap).map((key, index) => {
        const vote = +key;

        return (
          <Fragment key={key}>
            <input
              aria-describedby={feedbackElementId}
              key={index}
              defaultChecked={currentVote === vote}
              className="absolute w-0 h-0 peer"
              name="rating"
              value={vote}
              type="radio"
              id={vote.toString()}
              onClick={() => {
                setCurrentVote(vote);
              }}
            />
            <label
              htmlFor={vote.toString()}
              className="peer-focus-visible:outline cursor-pointer"
              onMouseEnter={() => setHoveredVote(vote)}
              onMouseLeave={() => setHoveredVote(undefined)}
            >
              <StarOutline
                aria-hidden
                className={classNames(
                  "h-6 w-6 text-grey-300",
                  hoveredVote === undefined &&
                    currentVote !== undefined &&
                    currentVote >= vote &&
                    activeClassName,
                  hoveredVote !== undefined &&
                    hoveredVote >= vote &&
                    activeClassName
                )}
              />
              <span className="sr-only">{vote} na 10 gwiazdek</span>
            </label>
          </Fragment>
        );
      })}
    </fieldset>
  );
};

export default StarsInput;
