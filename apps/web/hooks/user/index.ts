import { FetchResult, useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "@/services/user";

export default function useUser() {
  const { data: dataUser, error } = useQuery(GET_CURRENT_USER);

  return {
    dataUser,
    error,
  };
}
