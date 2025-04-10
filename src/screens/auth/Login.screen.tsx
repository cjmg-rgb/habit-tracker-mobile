import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import styles from "@/src/styles/Login.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm, loginSchema } from "@/src/helpers/zod-validations";
import { useLogin } from "@/src/hooks/useLogin";

export default function LoginScreen() {
  const { mutate: login } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = (value: ILoginForm) => {
    login(value);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>login</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <View>
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Email"
              />
              <Text>{errors ? errors.email?.message : ""}</Text>
            </View>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <View>
              <TextInput
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
              />
            </View>
          )}
        />
        <View>
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </View>
  );
}
