// api.js
const API_URL = "http://localhost:5000/api"; // Back-end API URL

export const loginUser = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const fetchResources = async () => {
    const response = await fetch(`${API_URL}/resources`);
    return response.json();
};