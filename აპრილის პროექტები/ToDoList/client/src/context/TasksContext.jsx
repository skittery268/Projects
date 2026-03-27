import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { fetchCreateTask, fetchDeleteTask, fetchUpdateTask, fetchTasks, fetchChangeStatus } from "../services/TasksService";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

// eslint-disable-next-line react-refresh/only-export-components
export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const getTasks = async () => {
            try {
                const res = await fetchTasks();

                setTasks(res.data.data.tasks);
            } catch (err) {
                console.log(err);
            }
        }
        getTasks();
    }, [user]);

    const addTask = async (data) => {
        try {
            const res = await fetchCreateTask(data);

            setTasks(prev => [...prev, res.data.data.task]);
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await fetchDeleteTask(id);

            setTasks(prev => prev.filter(task => task._id !== id));
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    const updateTask = async (id, data) => {
        try {
            const res = await fetchUpdateTask(id, data);

            setTasks(prev => prev.map(task => task._id === id ? res.data.data.task : task));
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }
    
    const changeStatus = async (id, status) => {
        try {
            const res = await fetchChangeStatus(id, status);

            setTasks(prev => prev.map(task => task._id === id ? res.data.data.task : task));
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask, updateTask, changeStatus }}>
            {children}
        </TasksContext.Provider>
    )
}