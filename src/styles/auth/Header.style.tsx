import { StyleSheet } from "react-native";
import themes from "@/src/constants/themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.COLORS.background,
  },
  headerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: themes.COLORS.background,
  },
  headerImage: {
    width: "75%",
    height: "75%",
    resizeMode: "contain",
  },
  headerTexts: {
    flexDirection: "column",
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: "mono-bold",
  },
  headerSubtitle: {
    color: themes.COLORS.grey,
    textAlign: "center",
    width: "85%",
    fontFamily: themes.FONTS.monoItalic,
    fontSize: 14,
  },
  getStartedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.COLORS.background,
  },
  getStartedBtn: {
    backgroundColor: themes.COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  getStartedTxt: {
    color: themes.COLORS.white,
    fontFamily: themes.FONTS.monoReg,
  },
});
