"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { LoginSchema, LoginFormValues } from "@/validations/loginSchema";
import { Alert } from "../ui/alert";
import { PasswordInput } from "../ui/password-input";


const LOGIN_FIELDS = [
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "example@email.com",
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "******",
    },
] as const;

const LoginForm = ({ handleLoginSuccess }: { handleLoginSuccess?: () => void }) => {

    const { mutate: loginMutate, isPending } = useLogin();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginFormValues) => {
        loginMutate(data, {
            onSuccess: () => {
                if (handleLoginSuccess) {
                    handleLoginSuccess();
                }
            },
            onError: (error: any) => {
                const message = error?.response?.data?.message || "Invalid credentials";
                form.setError("root", { message });
            }
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {LOGIN_FIELDS.map((loginField) => (
                    <FormField
                        control={form.control}
                        name={loginField.name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{loginField.label}</FormLabel>
                                <FormControl>
                                    {loginField.type === "password" ? (
                                        <PasswordInput
                                            placeholder={loginField.placeholder}
                                            {...field}
                                        />
                                    ) : (
                                        <Input
                                            placeholder={loginField.placeholder}
                                            type={loginField.type}
                                            {...field}
                                        />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Logging in..." : "Login"}
                </Button>

                {/* Error message */}
                {form.formState.errors.root && (
                    <Alert
                        variant="error"
                        title="Login Failed"
                        message={form.formState.errors.root?.message || "Unknown error occurred"}
                    />
                )}

                {/* Login link */}
                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="font-semibold text-[#BE968E] hover:underline">
                        Register
                    </Link>
                </div>
            </form>
        </Form>
    );
};

export default LoginForm;
