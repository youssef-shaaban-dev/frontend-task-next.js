import apiClient from "@/lib/apiClient";

export interface VerifyData {
    verificationCode: string;
}

export const verifyService = async (data: VerifyData) => {
    const response = await apiClient.post("/auth/verify-account", data);
    return response.data;
};
