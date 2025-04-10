import { ILoginForm } from "@/src/helpers/zod-validations";
import { ILoginResponse } from "../types";
import apiClient from "./apiClient";

export const login = async (value: ILoginForm): Promise<ILoginResponse> => {
  try {
    const response = await apiClient.post("/auth/login", value);
    return response.data.data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};
