import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../features/userSlice";
import { toast } from "react-toastify";

export function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    mutate: logout,
    isPending,
    isError,
  } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      if (!isError) {
        toast.success("با موفقیت خارج شدید!");
      } else {
        toast.error("خطا در خروج !");
      }
      dispatch(clearUser());
      localStorage.removeItem("session");
      localStorage.removeItem("user");
      queryClient.removeQueries();
      navigate("/login");
    },
  });

  return { logout, isPending, isError };
}
