import { useQuery } from "@tanstack/react-query";

export type Creator = {
  id: string;
  name: string;
  creator_role: "director" | "screenwriter";
};

const useMovieCreators = (movieId: string) =>
  useQuery<Creator[]>({
    queryKey: ["movie-creators", movieId],
    queryFn: () =>
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/movieCreators?movieId=${movieId}`,
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

export default useMovieCreators;
