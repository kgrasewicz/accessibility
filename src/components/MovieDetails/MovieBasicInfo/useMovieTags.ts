import { useQuery } from "@tanstack/react-query";

export type Tag = {
  code: string;
  label: string;
};

const useMovieTags = (movieId: string) =>
  useQuery<Tag[]>({
    queryKey: ["movie-tags", movieId],
    queryFn: () =>
      fetch(
        `https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws/movieTags?movieId=${movieId}`,
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

export default useMovieTags;
