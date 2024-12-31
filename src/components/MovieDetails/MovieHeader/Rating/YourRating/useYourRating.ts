import { useQuery } from "@tanstack/react-query";

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
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/userMovieScore?movieId=${movieId}&userId=${userId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      ).then((res) => {
        return res.json();
      }),
  });

  return { ...query, data: query?.data?.score };
};

export default useYourRating;
