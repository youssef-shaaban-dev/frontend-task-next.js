import { logoutService } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: logoutService,
        onSuccess: (data) => {
            toast.success(data.message);
            router.push("/login");
        },
    })
};
