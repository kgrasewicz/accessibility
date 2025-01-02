import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

export type Tag = {
  code: string;
  label: string;
};

const useMovieTags = (movieId: string) =>
  useQuery<Tag[]>({
    queryKey: ["movie-tags", movieId],
    queryFn: () => fetchData(`movieTags?movieId=${movieId}`),
  });

export default useMovieTags;
