import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "@/src/styles/auth/Login.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm, loginSchema } from "@/src/helpers/zod-validations";
import { useLogin } from "@/src/hooks/useLogin";
import Ionicons from "@expo/vector-icons/Ionicons";
import themes from "@/src/constants/themes";
import { Link } from "expo-router";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const { mutate: login, error } = useLogin();

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

  const onSubmit: SubmitHandler<ILoginForm> = (data: ILoginForm) => {
    login(data);
  };

  if (error) {
    Toast.show({
      text1: "Login Failed",
      text2: error.message,
      type: "error",
      topOffset: 100,
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.headerImg}
              source={require("@/src/assets/images/login-page-2.png")}
            />
            {/* <Ionicons name="person" style={styles.headerIcon} /> */}
            <Text style={styles.title}>Login to your account</Text>
          </View>
          <View style={styles.loginFormContainer}>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, name, onChange } }) => (
                <View
                  style={[
                    styles.inputContainer,
                    {
                      borderColor: errors.email?.message
                        ? "red"
                        : themes.COLORS.grey,
                    },
                  ]}
                >
                  <TextInput
                    placeholder="Email"
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                    placeholderTextColor={themes.COLORS.grey}
                  />
                </View>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { value, name, onChange } }) => (
                <View
                  style={[
                    styles.inputContainer,
                    {
                      borderColor: errors.password?.message
                        ? "red"
                        : themes.COLORS.grey,
                    },
                  ]}
                >
                  <TextInput
                    secureTextEntry={hidePassword}
                    placeholder="Password"
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                    placeholderTextColor={themes.COLORS.grey}
                  />
                  <Ionicons
                    name={hidePassword ? "eye" : "eye-off"}
                    style={styles.passwordIcon}
                    onPress={() => setHidePassword(!hidePassword)}
                  />
                </View>
              )}
            />
            <View style={styles.inputOthers}>
              <Text style={{ color: themes.COLORS.grey }}>Remember Me</Text>
              <Text style={{ color: themes.COLORS.grey }}>
                Forgot password?
              </Text>
            </View>
            <TouchableOpacity
              style={styles.inptuBtn}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.inputText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.authContainer}>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                gap: 20,
              }}
            >
              <View style={styles.divider}></View>
              <Text style={{ fontFamily: themes.FONTS.monoReg }}>
                or login with
              </Text>
            </View>
            <View style={{ width: "100%", gap: 10 }}>
              <View style={styles.authBtn}>
                <Ionicons name="logo-google" style={styles.authIcon} />
                <Text style={styles.authText}>Login with Google</Text>
              </View>
              <View style={styles.authBtn}>
                <Ionicons name="logo-apple" style={styles.authIcon} />
                <Text style={styles.authText}>Login with Apple</Text>
              </View>
            </View>
            <Text>
              Don't have an account?{" "}
              <Link href="/(auth)/register" asChild>
                <Text style={{ color: themes.COLORS.accent }}>
                  Create an account
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
