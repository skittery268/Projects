import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";

const Tasks = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [editedTaskId, setEditedTaskId] = useState(null);
    const [filterKeyword, setFilterKeyword] = useState("All");
    const { tasks, deleteTask, changeStatus } = useTasks();

    let filteredTasks = tasks;

    if (filterKeyword === "All") {
        filteredTasks = tasks;
    } else {
        filteredTasks = tasks.filter(task => task.status === filterKeyword);
    }

    const filterButtonClass = (keyword) => `rounded-xl border px-4 py-2 text-sm font-medium transition cursor-pointer ${
        filterKeyword === keyword
            ? "border-slate-900 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900"
    }`;

    const statusButtonClass = (status, currentStatus) => {
        const isActive = status === currentStatus;

        if (!isActive) {
            return "rounded-lg cursor-pointer border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-400 opacity-60 transition hover:opacity-80";
        }

        return `rounded-lg cursor-pointer border px-3 py-1.5 text-xs font-semibold transition ${
            status === "Active"
                ? "border-blue-300 bg-blue-50 text-blue-700"
                : status === "In Progress"
                    ? "border-amber-300 bg-amber-50 text-amber-700"
                    : status === "Completed"
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                        : "border-rose-300 bg-rose-50 text-rose-700"
        }`;
    };

    return (
        <section className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Tasks</h1>
                <button
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm cursor-pointer font-semibold text-white transition hover:bg-slate-800"
                    onClick={() => setShowAddTask(!showAddTask)}
                >
                    { showAddTask ? "Cancel" : "Add Task" }
                </button>
            </div>

            {
                showAddTask ? (
                    <>
                        <AddTask setShowAddTask={setShowAddTask} />
                    </>
                ) : (
                    <>
                        <div className="flex flex-wrap gap-2 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
                            <button className={filterButtonClass("All")} onClick={() => setFilterKeyword("All")}>All</button>
                            <button className={filterButtonClass("Active")} onClick={() => setFilterKeyword("Active")}>Active</button>
                            <button className={filterButtonClass("In Progress")} onClick={() => setFilterKeyword("In Progress")}>In Progress</button>
                            <button className={filterButtonClass("Completed")} onClick={() => setFilterKeyword("Completed")}>Completed</button>
                            <button className={filterButtonClass("Closed")} onClick={() => setFilterKeyword("Closed")}>Closed</button>
                        </div>

                        {
                            tasks.length === 0 ? (
                                <p className="rounded-2xl border border-slate-200 bg-white/85 p-6 text-sm text-slate-600 shadow-sm">
                                    No tasks found. Please add some tasks.
                                </p>
                            ) : (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                                    {
                                        filteredTasks.map((task, index) => {
                                            return (
                                                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                                    {
                                                        editedTaskId === task._id ? (
                                                            <>
                                                                <EditTask taskId={task._id} setEditedTaskId={setEditedTaskId} />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-500">Task №{index + 1}</p>
                                                                <h2 className="text-lg font-semibold text-slate-900">{task.title}</h2>
                                                                <p className="mt-2 text-sm leading-6 text-slate-600">{task.content}</p>

                                                                <div className="mt-4 flex flex-wrap gap-2">
                                                                    <button className={statusButtonClass("Active", task.status)} onClick={() => changeStatus(task._id, "Active")}>Active</button>
                                                                    <button className={statusButtonClass("In Progress", task.status)} onClick={() => changeStatus(task._id, "In Progress")}>In Progress</button>
                                                                    <button className={statusButtonClass("Completed", task.status)} onClick={() => changeStatus(task._id, "Completed")}>Completed</button>
                                                                    <button className={statusButtonClass("Closed", task.status)} onClick={() => changeStatus(task._id, "Closed")}>Closed</button>
                                                                </div>

                                                                <div className="mt-5 flex gap-2">
                                                                    <button className="rounded-xl border cursor-pointer border-rose-300 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-400" onClick={() => deleteTask(task._id)}>Delete</button>
                                                                    <button className="rounded-xl border cursor-pointer border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900" onClick={() => setEditedTaskId(task._id)}>Edit</button>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </>
                )
            }
        </section>
    )
}

export default Tasks;