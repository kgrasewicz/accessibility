import { useQuery } from "@tanstack/react-query";

export type Awards = {
  movieId: string;
  award_count?: number;
  nomination_count?: number;
};

const useMovieAwards = (movieId: string) =>
  useQuery<Awards[]>({
    queryKey: ["movie-awards", movieId],
    queryFn: () =>
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/movieAwards?movieId=${movieId}`,
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

export default useMovieAwards;
