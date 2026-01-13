"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-2xl font-bold">Page Not Found</h2>
            <p className="text-xl">The page you are looking for does not exist.</p>
            <Button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => router.push('/')}>
                Back to Home
            </Button>
        </div>
    )
}

export default NotFound