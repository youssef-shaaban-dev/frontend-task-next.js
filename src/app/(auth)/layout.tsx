import QueryProvider from "@/components/shared/provider/QueryProvider";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <Toaster />
            <QueryProvider>{children}</QueryProvider>
        </main>
    );
}
