import { useMutation, useQueryClient } from "@tanstack/react-query";
import { movieScoreQuery } from "../MovieHeader/Rating/YourRating/useYourRating";

const useRateMovie = ({
  userId,
  movieId,
}: {
  userId: string;
  movieId: string;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (score?: number) =>
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/setUserMovieScore`,
        {
          method: "POST",
          body: JSON.stringify({ movieId, userId, score }),
        }
      ),

    onMutate: async (newScore) => {
      await queryClient.cancelQueries({
        queryKey: [movieScoreQuery, movieId, userId],
      });

      const previousScore = queryClient.getQueryData([
        movieScoreQuery,
        movieId,
        userId,
      ]);

      queryClient.setQueryData(
        [movieScoreQuery, movieId, userId],
        [
          {
            score: newScore,
          },
        ]
      );

      return { previousScore, newScore };
    },
    onError: (_err, _newScore, context) => {
      queryClient.setQueryData(
        [movieScoreQuery, movieId, userId],
        [
          {
            score: context?.previousScore,
          },
        ]
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [movieScoreQuery, movieId, userId],
      });
    },
  });
};

export default useRateMovie;
