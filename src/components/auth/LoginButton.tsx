import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { ILoginForm } from "@/src/helpers/zod-validations";
import { useLogin } from "@/src/hooks/useLogin";

export default function LoginButton() {
  const { mutate: login } = useLogin();

  const onSubmit: SubmitHandler<ILoginForm> = (value: ILoginForm) => {
    login(value);
  };

  return (
    <TouchableOpacity>
      <Text>LOGIN</Text>
    </TouchableOpacity>
  );
}
