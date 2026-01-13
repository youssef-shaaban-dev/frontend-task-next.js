"use client";

import { useEffect, useState } from "react";

const DashboardPage = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        // Ensure this runs on client only
        const storedName = localStorage.getItem("userName");
        if (storedName) {
            setName(storedName);
        }
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome, {name || "User"}
                </h1>
                <p className="text-gray-500">You have successfully logged in.</p>
            </div>
        </div>
    );
};

export default DashboardPage;