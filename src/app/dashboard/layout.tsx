import QueryProvider from "@/components/shared/provider/QueryProvider";
import { Sidebar } from "@/components/shared/Sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <QueryProvider>
            <div className="min-h-screen bg-gray-50">
                <Sidebar />
                <div className="p-4 sm:ml-64">
                    {children}
                </div>
            </div>
        </QueryProvider>
    );
}
