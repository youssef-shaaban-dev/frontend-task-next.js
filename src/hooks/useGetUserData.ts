import { userService } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const useGetUserData = () => {
    return useQuery({
        queryKey: ['user-data'],
        queryFn: userService
    })
}