import apiClient from "@/lib/apiClient";
import { AuthResponse, LoginRequest } from "@/types/auth";

export const loginService = async (data: LoginRequest) => {
  const response = await apiClient.post<AuthResponse>("/auth/login", data);
  return response.data;
};
