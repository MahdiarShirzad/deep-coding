import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";

export function useUser() {
  const dispatch = useDispatch();
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    user,
    isAuthenticated: !!user,
  };
}
