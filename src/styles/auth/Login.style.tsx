import themes from "@/src/constants/themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.COLORS.background,
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    width: "80%",
  },
  headerContainer: {
    alignItems: "center",
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },
  headerImg: {
    flex: 1,
    resizeMode: "contain",
  },
  headerIcon: {
    fontSize: 52,
    color: themes.COLORS.accent,
  },
  title: {
    fontSize: 22,
    fontFamily: themes.FONTS.monoBold,
  },
  loginFormContainer: {
    width: "100%",
    alignItems: "center",
    gap: 14,
    flex: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    width: "100%",
    borderColor: themes.COLORS.grey,
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 14,
    padding: 10,
    flex: 1,
  },
  passwordIcon: {
    fontSize: 18,
    paddingRight: 10,
    color: themes.COLORS.accent,
  },
  inputOthers: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inptuBtn: {
    backgroundColor: themes.COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  inputText: {
    color: themes.COLORS.white,
    fontFamily: themes.FONTS.monoReg,
  },
  authContainer: {
    alignItems: "center",
    width: "100%",
    gap: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  authBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: themes.COLORS.accent,
    width: "100%",
    gap: 5,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  authIcon: {
    fontSize: 22,
    color: themes.COLORS.accent,
  },
  authText: {
    fontSize: 16,
    fontFamily: themes.FONTS.monoReg,
  },
  divider: {
    width: "100%",
    height: 1,
    borderWidth: 0.3,
    borderColor: themes.COLORS.grey,
  },
  error: {
    color: themes.COLORS.error,
  },
});
