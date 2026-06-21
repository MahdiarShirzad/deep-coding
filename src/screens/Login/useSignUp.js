import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: ({ user, token }) => {
      // if (token) {
      //   localStorage.setItem("token", token);
      // }
      queryClient.setQueryData(["user"], user);

      toast.success("ثبت‌نام با موفقیت انجام شد و وارد شدید!", {
        position: "top-center",
      });

      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message || "خطایی در ثبت‌نام رخ داد!", {
        position: "top-center",
      });
    },
  });

  return { signUp, isPending };
}
