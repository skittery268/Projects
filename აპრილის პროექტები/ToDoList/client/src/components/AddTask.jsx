import { useForm } from "../hooks/useForm";
import { useTasks } from "../hooks/useTasks";

const AddTask = ({ setShowAddTask }) => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        title: "",
        content: ""
    })

    const { addTask } = useTasks();

    return (
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" onSubmit={(e) => { handleSubmit(e, addTask); resetForm(); setShowAddTask(false); }}>
            <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
                required
            />
            <textarea
                className="min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter content"
                required
            >

            </textarea>
            <button className="w-full cursor-pointer rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" type="submit">
                Add Task
            </button>
        </form>
    )
}

export default AddTask;