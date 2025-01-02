import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

type DistributionItem = {
  movie_id: string;
  score: number;
  score_percentage: string;
};

const useMovieScoreDistribution = ({ movieId }: { movieId: string }) =>
  useQuery<DistributionItem[]>({
    queryKey: ["movie-score-distribution", movieId],
    queryFn: () => fetchData(`movieScoreDistribution?movieId=${movieId}`),
  });

export default useMovieScoreDistribution;
