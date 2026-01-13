"use client";
import { verifyService } from "@/services";
import { VerifyData } from "@/services/verifyService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useVerify = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (data: VerifyData) => verifyService(data),
        onSuccess: () => {
            toast.success("Account Verified Successfully");
            router.push("/dashboard");
        },
    });
};
