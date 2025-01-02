import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export const movieScoreQuery = "movie-score";

const useYourRating = ({
  movieId,
  userId,
}: {
  movieId: string;
  userId: string;
}) => {
  const query = useQuery<{ score?: number }>({
    queryKey: [movieScoreQuery, movieId, userId],
    queryFn: () =>
      fetchData(`userMovieScore?movieId=${movieId}&userId=${userId}`),
  });

  return { ...query, data: query?.data?.score };
};

export default useYourRating;
