"use client";
import { loginService } from "@/services/loginService"
import { LoginRequest } from "@/types";
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast";

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginRequest) => loginService(data),
        onSuccess: (data) => {
            toast.success(data.message);
        },
    })
}