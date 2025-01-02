import { useMutation, useQueryClient } from "@tanstack/react-query";
import { movieScoreQuery } from "../MovieHeader/Rating/YourRating/useYourRating";

const useRateMovie = ({
  userId,
  movieId,
}: {
  userId: string;
  movieId: number;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (score?: number) =>
      fetch(`/proxy/setUserMovieScore`, {
        method: "POST",
        body: JSON.stringify({
          movieId: Number(movieId),
          userId,
          score: Number(score),
        }),
      }),

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
