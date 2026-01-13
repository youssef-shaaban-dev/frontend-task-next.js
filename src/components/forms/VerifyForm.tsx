"use client";

import { useVerify } from "@/hooks/useVerify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { VerifySchema, VerifyFormValues } from "@/validations/verifySchema";

import { useResendCodeVerfication } from "@/hooks/useResendCodeVerfication";

const VerifyForm = () => {
    const { mutate: verify, isPending } = useVerify();
    const { mutate: resendCode, isPending: isResending } = useResendCodeVerfication();

    const form = useForm<VerifyFormValues>({
        resolver: zodResolver(VerifySchema),
        defaultValues: {
            code: "",
        },
    });

    const onSubmit = (data: VerifyFormValues) => {
        verify({ code: data.code });
    };

    return (
        <div className="relative">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
                    <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem className="flex flex-col items-center">
                                <FormLabel>Verification Code</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        {isPending ? "Verifying..." : "Verify"}
                    </Button>

                    <div className="text-center text-sm">
                        Didn't receive the code?
                        <Button
                            onClick={() => resendCode()}
                            disabled={isResending}
                            className="font-semibold text-white hover:underline disabled:opacity-50 mx-2"
                        >
                            {isResending ? "Resending..." : "Resend Code"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default VerifyForm;
