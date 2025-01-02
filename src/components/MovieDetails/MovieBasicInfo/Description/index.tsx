import Skeleton from "react-loading-skeleton";
import getFilmwebUrl from "src/utils/getFilmwebUrl";

type DescriptionProps = {
  isPending: boolean;
  description?: string;
  encodedMovieUrlId: string;
};

const Description = ({
  isPending,
  description,
  encodedMovieUrlId,
}: DescriptionProps) => {
  if (isPending) {
    return <Skeleton />;
  }

  return (
    <div className="grid gap-y-1 text-base">
      <p className="text-grey-600">{description}</p>
      <a
        href={getFilmwebUrl(`/film/${encodedMovieUrlId}/descs`)}
        className="text-link"
      >
        zobacz pełny opis
      </a>
    </div>
  );
};

export default Description;
