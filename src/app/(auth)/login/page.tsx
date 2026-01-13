"use client";
import { LoginForm } from "@/components/forms";
import VerifyModal from "@/components/shared/models/VerifyMode";
import { useState } from "react";

const LoginPage = () => {
    const [showVerifyModal, setShowVerifyModal] = useState(false);

    const handleLoginSuccess = () => {
        setShowVerifyModal(true);
    };

    return (
        <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm sm:p-8">

            <h1 className="text-xl font-semibold mb-6 text-center">
                تسجيل الدخول
            </h1>

            <LoginForm handleLoginSuccess={handleLoginSuccess} />
            {showVerifyModal && <VerifyModal />}
        </div>
    )
}

export default LoginPage;