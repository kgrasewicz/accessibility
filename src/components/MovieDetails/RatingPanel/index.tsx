import { useEffect, useState } from "react";
import Close from "src/assets/close.svg?react";
import { classNames } from "src/utils/classNames.helper";
import ratingMap from "src/utils/ratingMap";
import useYourRating from "../MovieHeader/Rating/YourRating/useYourRating";
import Stars from "./Stars";
import styles from "./styles.module.scss";
import useRateMovie from "./useRateMovie";

const feedbackId = "feedback";
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

type RatingPanelProps = {
  movieId: number;
};

const RatingPanel = ({ movieId }: RatingPanelProps) => {
  const [hoveredVote, setHoveredVote] = useState<number>();
  const [currentVote, setCurrentVote] = useState<number>();
  const firstNameLetter = userDetails.Name.charAt(0);

  const { data } = useYourRating({
    movieId,
    userId: "f3b1afb3-c94c-4f96-a6c2-ecf6b092b5d9",
  });
  const { mutateAsync, isError, isSuccess } = useRateMovie({
    movieId,
    userId: "f3b1afb3-c94c-4f96-a6c2-ecf6b092b5d9",
  });

  useEffect(() => {
    setCurrentVote(data);
  }, [data]);

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
            <span className="flex items-center gap-x-1">
              <span role="status">{ratingMap[currentVote]}</span>
              <button onClick={() => setCurrentVote(undefined)}>
                <span className="sr-only">Close</span>
                <Close className="h-4 w-4 text-grey-200" />
              </button>
            </span>
          )}
        </span>
      </div>
      <Stars
        feedbackElementId={feedbackId}
        hoveredVote={hoveredVote}
        currentVote={currentVote}
        setCurrentVote={async (value) => {
          await mutateAsync(value);
          setCurrentVote(value);
        }}
        setHoveredVote={setHoveredVote}
      />
      <p
        className={classNames(
          "text-sm",
          isError && "text-error",
          isSuccess && "text-success"
        )}
        id={feedbackId}
      >
        {isError
          ? "Something went wrong... Please try again later"
          : isSuccess
            ? "Movie rated successfully!"
            : ""}
      </p>
    </div>
  );
};

export default RatingPanel;
