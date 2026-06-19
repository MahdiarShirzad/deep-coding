import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      toast.success("با موفقیت وارد شدید!", { position: "top-center" });
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("ایمیل یا رمز عبور اشتباه است!", { position: "top-center" });
    },
  });

  return { login, isPending };
}
