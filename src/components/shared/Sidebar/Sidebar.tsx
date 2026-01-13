"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import { Button } from "@/components/ui/button";

const sidebarItems = [
    {
        icon: LayoutDashboard,
        label: "Overview",
        href: "/dashboard",
    },
];

export const Sidebar = () => {
    const pathname = usePathname();

    const { mutate: logout, isPending } = useLogout();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white transition-transform">
            <div className="flex h-full flex-col justify-between px-3 py-4">
                <div>
                    <div className="mb-5 flex items-center pl-2.5">
                        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#BE968E]">
                            my Dashboard
                        </span>
                    </div>
                    <ul className="space-y-2 font-medium">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 group",
                                            isActive && "bg-[#BE968E]/10 text-[#BE968E]"
                                        )}
                                    >
                                        <Icon className={cn(
                                            "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900",
                                            isActive && "text-[#BE968E] group-hover:text-[#BE968E]"
                                        )} />
                                        <span className="ml-3">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="border-t pt-4">
                    <Button
                        onClick={() => logout()}
                        disabled={isPending}
                        variant="destructive"
                        className="w-full flex items-center justify-center gap-2 text-center"
                    >
                        <LogOut className="h-5 w-5 text-red-600 transition duration-75 group-hover:text-red-700" />
                        <span className="font-medium">
                            {isPending ? "Logging out..." : "Logout"}
                        </span>
                    </Button>
                </div>
            </div>
        </aside>
    );
};
