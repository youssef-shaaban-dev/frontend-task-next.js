"use client";

import { useGetUserData } from "@/hooks/useGetUserData";
import { CreditCard, Package, ShoppingBag, User } from "lucide-react";

export default function DashboardPage() {
    const { data: userData, isLoading } = useGetUserData();
    const user = userData?.data;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Dashboard
                    </h1>
                    <p className="text-gray-500">
                        Welcome back, {user?.name || "User"}! Here's what's happening.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Cart Items"
                    value={user?.count_items_cart || 0}
                    icon={ShoppingBag}
                    description="Items in cart"
                />
                <StatsCard
                    title="Account Type"
                    value={user?.type || "Guest"}
                    icon={User}
                    description="User role"
                />
                <StatsCard
                    title="User ID"
                    value={`#${user?.id || '---'}`}
                    icon={CreditCard}
                    description="Unique identifier"
                />
                <StatsCard
                    title="Status"
                    value={user?.email_verified_at ? "Verified" : "Unverified"}
                    icon={Package}
                    description="Email verification"
                />
            </div>

            {/* Profile Content */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-lg font-semibold text-gray-900">
                    Profile Overview
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Avatar/Image */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-100 bg-gray-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={user?.image || "https://ui-avatars.com/api/?name=" + (user?.name || "User")}
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="inline-flex items-center rounded-full bg-[#BE968E]/10 px-3 py-1 text-sm font-medium text-[#BE968E]">
                            {user?.type || "User"}
                        </span>
                    </div>

                    {/* Details Grid */}
                    <div className="grid flex-1 gap-6 sm:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Full Name</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">{user?.name}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Email Address</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">{user?.email}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Mobile Number</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                                <span className="text-gray-400 mr-2">{user?.mobile_country_code}</span>
                                {user?.mobile}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Member Since</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                                {new Date().toLocaleDateString()} {/* Placeholder or add created_at if available */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ title, value, icon: Icon, description }: any) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <Icon className="h-4 w-4 text-gray-500" />
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>
    );
}