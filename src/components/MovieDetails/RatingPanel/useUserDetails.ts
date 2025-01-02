import { useQuery } from "@tanstack/react-query";
import fetchData from "src/utils/fetchData";

type UserDetails = {
  id: string;
  profile_image_url?: string;
  name: string;
};

const useMovieTags = (userId?: string) =>
  useQuery<UserDetails>({
    queryKey: ["user-details", userId],
    queryFn: () => fetchData(`userDetails?userId=${userId}`),
  });

export default useMovieTags;
