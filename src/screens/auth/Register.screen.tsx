import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "@/src/styles/auth/Register.style";
import { Keyboard } from "react-native";

export default function RegisterScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.headerImg}
              source={require("@/src/assets/images/register-page-1.png")}
            />
            {/* <Ionicons name="person" style={styles.headerIcon} /> */}
            <Text style={styles.title}>Tell us about yourself</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputsContainer}>
              <View style={styles.nameMainContainer}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={styles.formLabel}>First Name</Text>
                  <TextInput style={styles.formInput} />
                </View>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={styles.formLabel}>Last Name</Text>
                  <TextInput style={styles.formInput} />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.formLabel}>Password</Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.formLabel}>Confirm Password</Text>
                <TextInput style={styles.formInput} />
              </View>
              <TouchableOpacity style={styles.inptuBtn}>
                <Text style={styles.inputText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.terms}>
                By signing up, you agree to abide by the Terms and Conditions
                set forth by our application.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
