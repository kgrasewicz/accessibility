import { useState } from "react";
import Close from "src/assets/close.svg?react";
import { classNames } from "src/utils/classNames.helper";
import ratingMap from "src/utils/ratingMap";
import Stars from "./Stars";
import styles from "./styles.module.scss";

const preferencesMatchPercentage = 73;
type UserDetails = {
  Id: string;
  ProfileImageUrl?: string;
  Name: string;
};

const userDetails: UserDetails = {
  Id: "234",
  ProfileImageUrl: "",
  Name: "redroseheaven",
};

const movieRating = 5;

type RatingPanelProps = {
  movieId: string;
};

const RatingPanel = ({ movieId }: RatingPanelProps) => {
  const [hoveredVote, setHoveredVote] = useState<number>();
  const [currentVote, setCurrentVote] = useState<number>();
  const firstNameLetter = userDetails.Name.charAt(0);

  return (
    <div
      className={classNames(
        "mb-4 h-fit w-full lg:-translate-y-1/2 grid p-4 pb-6 bg-grey-100 rounded mx-auto md:w-fit lg:mx-4 gap-y-4",
        styles["card"]
      )}
    >
      <div className="flex gap-x-3 items-center">
        <span className="uppercase flex p-[2px] rounded-full h-12 w-12 border-[1px] border-grey-200">
          <a
            href="https://www.filmweb.pl/user/redroseheaven"
            className="text-grey-500 w-full h-full flex items-center justify-center text-xl rounded-full bg-grey-200"
          >
            {firstNameLetter}
          </a>
        </span>
        <span className="text-sm">
          {currentVote === undefined ? (
            `${preferencesMatchPercentage}% w Twoim guście`
          ) : (
            <span className="flex items-center gap-x-1" role="alert">
              {ratingMap[currentVote]}
              <button onClick={() => setCurrentVote(undefined)}>
                <span className="sr-only">Close</span>
                <Close className="h-4 w-4 text-grey-200" />
              </button>
            </span>
          )}
        </span>
      </div>
      <Stars
        hoveredVote={hoveredVote}
        currentVote={currentVote}
        setCurrentVote={setCurrentVote}
        setHoveredVote={setHoveredVote}
      />
    </div>
  );
};

export default RatingPanel;
