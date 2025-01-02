import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

type DistributionItem = {
  movie_id: number;
  score: number;
  score_percentage: number;
};

const useMovieScoreDistribution = ({ movieId }: { movieId: number }) =>
  useQuery<DistributionItem[]>({
    queryKey: ["movie-score-distribution", movieId],
    queryFn: () => fetchData(`movieScoreDistribution?movieId=${movieId}`),
  });

export default useMovieScoreDistribution;
