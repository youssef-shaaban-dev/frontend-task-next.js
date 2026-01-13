"use client";
import { loginService } from "@/services/loginService"
import { useMutation } from "@tanstack/react-query"
import { LoginData } from '../services/loginService';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useLogin = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (data: LoginData) => loginService(data),
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            const userName = data?.data?.user?.name || data?.user?.name || "User";
            localStorage.setItem("userName", userName);

            toast.success("تم تسجيل الدخول بنجاح");
            router.push("/dashboard");
        }
    })
}