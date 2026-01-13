"use client";
import axios from "axios";
import toast from "react-hot-toast";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // toast.error(error.response.data.message || "An error occurred");
      // Allow components to handle errors individually
    }
    return Promise.reject(error);
  }
);

export default apiClient;
