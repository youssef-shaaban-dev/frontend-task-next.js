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
import { z } from "zod";

export const verifySchema = z.object({
    code: z
        .string()
        .length(6, "Verification code must be 6 digits")
        .regex(/^[0-9]+$/, "Code must contain only numbers"),
});

export type VerifyFormValues = z.infer<typeof verifySchema>;

const VerifyForm = () => {
    const { mutate: verify, isPending } = useVerify();

    const form = useForm<VerifyFormValues>({
        resolver: zodResolver(verifySchema),
        defaultValues: {
            code: "",
        },
    });

    const onSubmit = (data: VerifyFormValues) => {
        verify({ verificationCode: data.code });
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
    );
};

export default VerifyForm;
