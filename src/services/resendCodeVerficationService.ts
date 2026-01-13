import apiClient from "@/lib/apiClient";

export const resendCodeVerficationService = async () => {
    const response = await apiClient.post('/auth/verify-email/resend-code');
    return response.data;
}