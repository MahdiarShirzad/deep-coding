import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { toast } from "react-toastify";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    mutate: login,
    isPending,
    isError,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      dispatch(setUser(data));
      localStorage.setItem("session", JSON.stringify(data.session));
      toast.success("با موفقیت وارد شدید !", { position: "top-center" });
      navigate("/");
    },
    onError: () => {
      toast.error("خطا در ورود !", { position: "top-center" });
    },
  });

  return { login, isPending, isError };
}
