import { useQuery } from "@tanstack/react-query";
import config from "../../config";

const useUser = () => {
  const getUser = async () => {
    const data = await fetch(config.userApi).then((res) => res.json());
    return data.data;
  };

  const { data, isLoading, error } = useQuery(["user"], getUser);

  return { user: data, loading: isLoading, error };
};

export default useUser;
