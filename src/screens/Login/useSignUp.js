import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useSignUp() {
  const navigate = useNavigate();

  const {
    mutate: signUp,
    isPending,
    isError,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success("با موفقیت ثبت نام کردید !", { position: "top-center" });
      navigate("/login");
    },
    onError: () => {
      toast.error("خطا در ثبت نام !", { position: "top-center" });
    },
  });

  return { signUp, isPending, isError };
}
