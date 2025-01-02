import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export type Awards = {
  movieId: string;
  award_count?: number;
  nomination_count?: number;
};

const useMovieAwards = (movieId: string) =>
  useQuery<Awards[]>({
    queryKey: ["movie-awards", movieId],
    queryFn: () => fetchData(`movieAwards?movieId=${movieId}`),
  });

export default useMovieAwards;
