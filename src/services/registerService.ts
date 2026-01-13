import apiClient from "@/lib/apiClient";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
  mobile: string;
  mobile_country_code?: string;
}
export const registerService = async (data: RegisterData) => {
  const response = await apiClient.post("/auth/register", data);
  return response.data;
};
