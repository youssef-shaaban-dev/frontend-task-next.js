import apiClient from "@/lib/apiClient";

export const registerService = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/register", data);
  return response.data;
};
