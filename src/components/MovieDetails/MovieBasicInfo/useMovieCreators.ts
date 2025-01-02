import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export type Creator = {
  creator_id: number;
  creator_name: string;
  creator_role: "director" | "screenwriter";
};

const useMovieCreators = (movieId?: number) =>
  useQuery<Creator[]>({
    queryKey: ["movie-creators", movieId],
    queryFn: () => fetchData(`movieCreators?movieId=${movieId}`),
  });

export default useMovieCreators;
