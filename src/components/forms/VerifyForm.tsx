"use client";

import { useVerify } from "@/hooks/useVerify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

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
import { VerifySchema, VerifyFormValues } from "@/lib/validations/authSchema";

const VerifyForm = () => {
    const { mutate: verify, isPending } = useVerify();
    const router = useRouter();

    const form = useForm<VerifyFormValues>({
        resolver: zodResolver(VerifySchema),
        defaultValues: {
            code: "",
        },
    });

    const onSubmit = (data: VerifyFormValues) => {
        verify({ verificationCode: data.code });
    };

    return (
        <div className="relative">
            {/* Close Button */}
            <button
                onClick={() => router.push('/login')}
                className="absolute -top-12 right-0 p-2 text-gray-500 hover:text-gray-900"
                aria-label="Close"
            >
                <X className="w-6 h-6" />
            </button>

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
                </form>
            </Form>
        </div>
    );
};

export default VerifyForm;
