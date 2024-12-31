import { useQuery } from "@tanstack/react-query";

type Summary = {
  movie_id: string;
  scores_count: string;
  avg_score: string;
  critic_scores_count: string;
  average_critic_score: string;
  wants_to_see_count: string;
};

const useMovieScoreSummary = ({ movieId }: { movieId: string }) =>
  useQuery<Summary>({
    queryKey: ["movie-score-summary", movieId],
    queryFn: () =>
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/movieScoreSummary?movieId=${movieId}`,
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

export default useMovieScoreSummary;
