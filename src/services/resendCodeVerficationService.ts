import axios from "axios";

export const resendCodeVerficationService = async () => {
    const response = await axios.post('/auth/verify-email/resend-code');
    return response.data;
}