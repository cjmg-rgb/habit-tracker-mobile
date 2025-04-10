import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ICredentials, ILoginResponse } from "../types";
import { ILoginForm } from "../helpers/zod-validations";
import { login } from "../api/authClient";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "expo-router";

export const useLogin = (): UseMutationResult<
  ILoginResponse,
  Error,
  ILoginForm
> => {
  const { setCredentials } = useAuthStore();
  const router = useRouter();

  return useMutation<ILoginResponse, Error, ILoginForm>({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (data) => {
      const { user, token } = data;
      setCredentials({ creds: user, token });
      router.replace("/(tabs)");
    },
  });
};
