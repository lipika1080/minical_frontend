import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000";

export const calculate = async (operation: string, numbers: number[]) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/calculate/${operation}`, { numbers });
        return response.data;
    } catch (error) {
        return { error: "An error occurred" };
    }
};
