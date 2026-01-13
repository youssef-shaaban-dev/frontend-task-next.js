import { RegisterForm } from "@/components/forms";

const RegisterPage = () => {
    return (
        <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm sm:p-8">

            <h1 className="text-xl font-semibold mb-6 text-center">
                إنشاء حساب جديد
            </h1>

            <RegisterForm />
        </div>
    )
}

export default RegisterPage;