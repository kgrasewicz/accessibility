import { useQuery } from "@tanstack/react-query";

type DistributionItem = {
  movie_id: string;
  score: number;
  score_percentage: string;
};

const useMovieScoreDistribution = ({ movieId }: { movieId: string }) =>
  useQuery<DistributionItem[]>({
    queryKey: ["movie-score-distribution", movieId],
    queryFn: () =>
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/movieScoreDistribution?movieId=${movieId}`,
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

export default useMovieScoreDistribution;
