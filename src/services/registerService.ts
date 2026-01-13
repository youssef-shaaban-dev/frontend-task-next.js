import apiClient from "@/lib/apiClient";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
  mobile: string;
  mobileCountryCode?: string;
}
export const registerService = async (data: RegisterData) => {
  const response = await apiClient.post("/auth/register", data);
  return response.data;
};
