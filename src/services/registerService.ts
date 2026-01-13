import apiClient from "@/lib/apiClient";
import { AuthResponse, RegisterRequest } from "@/types/auth";

export const registerService = async (data: RegisterRequest) => {
  const response = await apiClient.post<AuthResponse>("/auth/register", data);
  return response.data;
};
