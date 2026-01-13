"use client";
import { registerService } from "@/services";
import { RegisterData } from "@/services/registerService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: RegisterData) => registerService(data),
    onSuccess: () => {
      toast.success("تم إنشاء الحساب بنجاح");
      router.push("/login");
    },
  });
};
