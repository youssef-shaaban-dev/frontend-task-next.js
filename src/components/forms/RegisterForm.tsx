"use client";

import { useRegister } from "@/hooks/useRegister";
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
import { RegisterSchema, RegisterFormValues } from "@/validations/registerSchema";
import { PasswordInput } from "../ui/password-input";
import { Alert } from "../ui/alert";


const REGISTER_FIELDS = [
    {
        name: "name" as const,
        label: "Name",
        placeholder: "Enter your name",
        type: "text",
    },
    {
        name: "email" as const,
        label: "Email",
        placeholder: "example@email.com",
        type: "email",
    },
    {
        name: "password" as const,
        label: "Password",
        placeholder: "******",
        type: "password",
    },
    {
        name: "password_confirmation" as const,
        label: "Confirm Password",
        placeholder: "******",
        type: "password",
    },
    {
        name: "mobile_country_code" as const,
        label: "Country Code",
        placeholder: "+20",
        type: "text",
    },
    {
        name: "mobile" as const,
        label: "Phone Number",
        placeholder: "1234567890",
        type: "tel",
    },
] as const;

const RegisterForm = () => {

    const { mutate: register, isPending } = useRegister();

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(RegisterSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            mobile: "",
            mobile_country_code: "",
        },
    });

    const onSubmit = (data: RegisterFormValues) => {
        register(data, {
            onError: (error: any) => {
                const message = error?.response?.data?.message || "Registration failed";
                form.setError("root", { message });
            }
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {REGISTER_FIELDS.map((regField) => (
                    <FormField
                        control={form.control}
                        name={regField.name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{regField.label}</FormLabel>
                                <FormControl>
                                    {regField.type === "password" ? (
                                        <PasswordInput
                                            placeholder={regField.placeholder}
                                            {...field}
                                        />
                                    ) : (
                                        <Input
                                            placeholder={regField.placeholder}
                                            type={regField.type}
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
                    {isPending ? "Creating Account..." : "Register"}
                </Button>

                {/* Error message */}
                {form.formState.errors.root && (
                    <Alert
                        variant="error"
                        title="Registration Failed"
                        message={form.formState.errors.root?.message
                            || "Registration failed"}
                    />
                )}

                {/* Login link */}
                <div className="text-center text-sm">
                    Already have an account?
                    <Link href="/login"
                        className="font-semibold text-[#BE968E] hover:underline">
                        Login
                    </Link>
                </div>
            </form>
        </Form>
    );
};

export default RegisterForm;
