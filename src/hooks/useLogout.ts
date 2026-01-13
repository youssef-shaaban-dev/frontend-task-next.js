import { logoutService } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useLogout = () => {
    return useMutation({
        mutationFn: logoutService,
        onSuccess: () => {
            toast.success("Logout successfully");
        },
        onError: () => {
            toast.error("Logout failed");
        }
    })
};
