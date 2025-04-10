import Constants from "expo-constants";

export const getIp = () => {
  const localIp = Constants.expoConfig?.hostUri?.split(":")[0];
  return localIp;
};
