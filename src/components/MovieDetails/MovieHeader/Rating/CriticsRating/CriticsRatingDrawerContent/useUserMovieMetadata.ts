import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export type CriticMovieData = {
  movie_id: number;
  score: number;
  review?: string;
  name: string;
  updated_at: string;
};

const useUserMovieMetadata = ({ movieId }: { movieId: number }) =>
  useQuery<CriticMovieData[]>({
    queryKey: ["movie-user-metadata", movieId],
    queryFn: () => fetchData(`userMovieMetadata?movieId=${movieId}`),
  });

export default useUserMovieMetadata;
