"use client";
import { registerService } from "@/services";
import { RegisterRequest } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: RegisterRequest) => registerService(data),
    onSuccess: () => {
      toast.success("تم إنشاء الحساب بنجاح");
      router.push("/login");
    },
  });
};
