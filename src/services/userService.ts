import axios from "axios";

export const userService = async () => {
    const response = await axios.get('/auth/user-data');
    return response.data;
}