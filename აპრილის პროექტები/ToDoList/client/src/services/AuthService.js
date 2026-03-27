import { api } from "../api/axios"

export const fetchLogin = async data => {
    return await api.post("/auth/login", data);
}

export const fetchRegister = async data => {
    return await api.post("/auth/register", data);
}

export const fetchMe = async () => {
    return await api.get("/auth/me");
}

export const fetchLogout = async () => {
    return await api.delete("/auth/logout");
}