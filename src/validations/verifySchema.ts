import { z } from "zod";

export const VerifySchema = z.object({
    code: z
        .string()
        .length(6, "Verification code must be 6 digits")
        .regex(/^[0-9]+$/, "Code must contain only numbers"),
});

export type VerifyFormValues = z.infer<typeof VerifySchema>;
