import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

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
    queryFn: () => fetchData(`movieScoreSummary?movieId=${movieId}`),
  });

export default useMovieScoreSummary;
