import { useEffect, useState } from "react";
import Close from "src/assets/close.svg?react";
import LoadContent from "src/components/LoadContent";
import { classNames } from "src/utils/classNames.helper";
import { userId } from "src/utils/consts";
import ratingMap from "src/utils/ratingMap";
import Avatar from "../Avatar";
import useYourRating from "../MovieHeader/Rating/YourRating/useYourRating";
import StarsInput from "./StarsInput";
import styles from "./styles.module.scss";
import useRateMovie from "./useRateMovie";
import useUserDetails from "./useUserDetails";

const feedbackId = "feedback";
const preferencesMatchPercentage = 73;

type RatingPanelProps = {
  movieId: number;
};

const RatingPanel = ({ movieId }: RatingPanelProps) => {
  const [hoveredVote, setHoveredVote] = useState<number>();
  const [currentVote, setCurrentVote] = useState<number>();

  const { data: userDetails, isPending } = useUserDetails(userId);

  const { data } = useYourRating({
    movieId,
    userId,
  });
  const { mutateAsync, isError, isSuccess } = useRateMovie({
    movieId,
    userId,
  });

  useEffect(() => {
    setCurrentVote(data);
  }, [data]);

  return (
    <LoadContent
      className={classNames(
        "mb-4 h-fit w-full lg:-translate-y-1/2 grid p-4 pb-6 bg-grey-100 rounded mx-auto md:w-fit lg:mx-4 gap-y-4 md:min-w-[308px] min-h-[144px]",
        styles["card"]
      )}
      isError={!userDetails}
      isLoading={isPending}
    >
      <div className="flex gap-x-3 items-center">
        {userDetails && <Avatar isLink name={userDetails.name} />}
        <span className="text-sm">
          {currentVote === undefined || currentVote === null ? (
            `${preferencesMatchPercentage}% w Twoim guście`
          ) : (
            <span className="flex items-center gap-x-1">
              <span role="status">{ratingMap[currentVote]}</span>
              <button
                onClick={async () => {
                  await mutateAsync(undefined);
                }}
              >
                <span className="sr-only">Wyczyść ocenę</span>
                <Close className="h-4 w-4 text-grey-200" />
              </button>
            </span>
          )}
        </span>
      </div>
      <StarsInput
        feedbackElementId={feedbackId}
        hoveredVote={hoveredVote}
        currentVote={currentVote}
        setCurrentVote={async (value) => {
          await mutateAsync(value);
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
    </LoadContent>
  );
};

export default RatingPanel;
