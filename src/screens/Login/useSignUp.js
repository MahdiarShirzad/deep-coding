import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  const {
    mutate: signUp,
    isPending,
    isError,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user);

      navigate("/login");
    },
  });

  return { signUp, isPending, isError };
}
