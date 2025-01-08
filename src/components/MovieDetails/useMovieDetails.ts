import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export type Movie = {
  id: number;
  title: string;
  production_year: string;
  duration_seconds: string;
  background_image_url: string;
  description: string;
  poster_image_url: string;
  country_name: string;
  images?: string[];
};

const useMovieDetails = (movieId: number) =>
  useQuery<Movie>({
    queryKey: ["movie-details", movieId],
    queryFn: () => fetchData(`movieDetails?movieId=${movieId}`),
  });

export default useMovieDetails;
