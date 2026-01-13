import apiClient from "@/lib/apiClient";
import { AuthResponse, VerifyData } from "@/types";


export const verifyService = async (data: VerifyData) => {
    const response = await apiClient.post<AuthResponse>("/auth/verify-account", data);
    return response.data;
};
