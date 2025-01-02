import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export type Movie = {
  id: string;
  title: string;
  production_year: string;
  duration_seconds: string;
  background_image: { type: "Buffer"; data: ArrayBuffer };
  description: string;
  poster_image: { type: "Buffer"; data: ArrayBuffer };
  country_name: string;
};

const useMovieDetails = (movieId: string) =>
  useQuery<Movie>({
    queryKey: ["movie-details", movieId],
    queryFn: () => fetchData(`movieDetails?movieId=${movieId}`),
  });

export default useMovieDetails;
