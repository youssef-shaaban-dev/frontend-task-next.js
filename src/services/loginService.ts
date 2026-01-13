import apiClient from "@/lib/apiClient";

export interface LoginData {
  email: string;
  password: string;
}
export const loginService = async (data: LoginData) => {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
};
