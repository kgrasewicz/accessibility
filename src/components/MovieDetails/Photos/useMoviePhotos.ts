import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export type Photo = {
  movieId: number;
  url: string;
  alt_text: string;
};

const useMoviePhotos = (movieId?: number) =>
  useQuery<Photo[]>({
    queryKey: ["movie-photos", movieId],
    queryFn: () => fetchData(`moviePhotos?movieId=${movieId}`),
  });

export default useMoviePhotos;
