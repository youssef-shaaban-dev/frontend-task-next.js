import apiClient from "@/lib/apiClient";

export const logoutService = async () => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
};