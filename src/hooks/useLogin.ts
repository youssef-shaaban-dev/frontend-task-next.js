"use client";
import { loginService } from "@/services/loginService"
import { LoginRequest } from "@/types";
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

export const useLogin = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (data: LoginRequest) => loginService(data),
        onSuccess: (data) => {
            if (data?.data?.token) {
                localStorage.setItem("token", data.data.token);
            }
            if (data?.data?.name) {
                localStorage.setItem("userName", data.data.name);
            }
            toast.success(data.message);
            router.push("/dashboard");
        },
    })
}