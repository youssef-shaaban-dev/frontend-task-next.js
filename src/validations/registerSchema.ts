import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const RegisterSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Password must contain at least one special character"),
        password_confirmation: z.string().min(8),
        mobile: z
            .string()
            .regex(/^[0-9]+$/, "Mobile number must contain only numbers"),
        mobile_country_code: z.string().regex(/^\+\d+$/, "Invalid country code (e.g. +20)"),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Passwords do not match",
        path: ["password_confirmation"],
    })
    .superRefine((data, ctx) => {
        const fullNumber = `${data.mobile_country_code}${data.mobile}`;
        try {
            const phoneNumber = parsePhoneNumberFromString(fullNumber);
            if (!phoneNumber || !phoneNumber.isValid()) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Invalid mobile number for the selected country code",
                    path: ["mobile"],
                });
            }
        } catch (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid mobile number format",
                path: ["mobile"],
            });
        }
    });

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
