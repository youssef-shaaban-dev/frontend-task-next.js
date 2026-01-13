import apiClient from "@/lib/apiClient";

export const loginService = async (data: {
  email: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
};
