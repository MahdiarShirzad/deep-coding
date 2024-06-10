import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../features/userSlice";

export function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      dispatch(clearUser());
      localStorage.removeItem("session");
      localStorage.removeItem("user");
      queryClient.removeQueries();
      navigate("/login");
    },
  });

  return { logout, isPending };
}
