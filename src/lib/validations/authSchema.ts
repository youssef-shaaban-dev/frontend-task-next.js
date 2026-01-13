import { z } from "zod";

export const RegisterSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        passwordConfirmation: z.string().min(6),
        mobile: z
            .string()
            .regex(/^[0-9]+$/, "Mobile must contain only numbers")
            .min(10, "Mobile number must be at least 10 digits"),

        mobileCountryCode: z.string().min(1, "Country code is required"),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    });

export const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const VerifySchema = z.object({
    code: z
        .string()
        .length(6, "Verification code must be 6 digits")
        .regex(/^[0-9]+$/, "Code must contain only numbers"),
});

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
export type LoginFormValues = z.infer<typeof LoginSchema>;
export type VerifyFormValues = z.infer<typeof VerifySchema>;
