"use client";
import { verifyService } from "@/services";
import { VerifyData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useVerify = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (data: VerifyData) => verifyService(data),
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
    });
};
