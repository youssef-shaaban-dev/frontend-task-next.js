import apiClient from "@/lib/apiClient";
import { AuthResponse } from "@/types";

export const userService = async () => {
    const response = await apiClient.get<AuthResponse>('/auth/user-data');
    return response.data;
}