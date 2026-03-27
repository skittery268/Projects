import { api } from "../api/axios"

export const fetchTasks = async () => {
    return await api.get("/tasks");
}

export const fetchCreateTask = async data => {
    return await api.post("/tasks", data);
}

export const fetchDeleteTask = async id => {
    return await api.delete(`/tasks/${id}`);
}

export const fetchUpdateTask = async (id, data) => {
    return await api.patch(`/tasks/${id}`, data);
}

export const fetchChangeStatus = async (id, status) => {
    return await api.patch(`/tasks/changestatus/${id}`, { status });
}