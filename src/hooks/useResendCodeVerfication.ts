import { resendCodeVerficationService } from "@/services";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useResendCodeVerfication = () => {
    return useMutation({
        mutationFn: resendCodeVerficationService,
        onSuccess: (data) => {
            toast.success(data.message);
        },
    })
}