
export interface AuthResponse {
    status: boolean;
    status_code: number;
    message: string;
    data: {
        id: number;
        type: string;
        name: string;
        email: string;
        mobile_country_code: string;
        mobile: string;
        image: string;
        email_verified_at: boolean;
        count_items_cart: number;
        token: string;
    }
}


export interface LoginRequest {
    email: string;
    password: string;
}


export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    password_confirmation?: string;
    mobile: string;
    mobile_country_code?: string;
}


export interface VerifyData {
    verificationCode: string;
}
