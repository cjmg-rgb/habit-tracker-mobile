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
  title: {
    fontSize: 22,
    fontFamily: themes.FONTS.monoBold,
    textAlign: "center",
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
  formContainer: {
    flex: 2,
    gap: 8,
    justifyContent: "space-around",
  },
  inputsContainer: {
    gap: 10,
  },
  nameMainContainer: {
    flexDirection: "row",
    gap: 8,
  },
  inputContainer: {
    flexDirection: "column",
  },
  formLabel: {
    fontSize: 16,
    fontFamily: themes.FONTS.monoReg,
    color: themes.COLORS.primary,
  },
  formInput: {
    padding: 5,
    borderWidth: 1,
    borderColor: themes.COLORS.primary,
    borderRadius: 5,
    fontSize: 22,
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
  terms: {
    color: themes.COLORS.grey,
    textAlign: "center",
    fontFamily: themes.FONTS.monoItalic,
  },
});
