import { useQuery } from "@tanstack/react-query";

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
    queryFn: () =>
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/movieDetails?movieId=${movieId}`,
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

export default useMovieDetails;
