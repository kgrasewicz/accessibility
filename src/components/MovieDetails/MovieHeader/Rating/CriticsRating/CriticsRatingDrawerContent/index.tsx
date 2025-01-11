import LoadContent from "src/components/LoadContent";
import { classNames } from "src/utils/classNames.helper";
import CriticReviewTile from "./CriticReviewTile";
import useUserMovieMetadata from "./useUserMovieMetadata";

type CriticsRatingDrawerContentProps = {
  movieId: number;
};

const CriticsRatingDrawerContent = ({
  movieId,
}: CriticsRatingDrawerContentProps) => {
  const { data, isPending } = useUserMovieMetadata({ movieId });

  return (
    <LoadContent isLoading={isPending}>
      <ul className="grid">
        {data?.map((item, index) => (
          <CriticReviewTile
            className={classNames(
              index !== 0 && "border-grey-200 border-t-[1px]"
            )}
            data={item}
            key={item.name}
          />
        ))}
      </ul>
    </LoadContent>
  );
};

export default CriticsRatingDrawerContent;
