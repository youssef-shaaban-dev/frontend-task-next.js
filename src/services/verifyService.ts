import apiClient from "@/lib/apiClient";
import { AuthResponse, VerifyData } from "@/types";


export const verifyService = async (data: VerifyData) => {
    const response = await apiClient.post<AuthResponse>("/auth/verify-email", data);
    return response.data;
};
