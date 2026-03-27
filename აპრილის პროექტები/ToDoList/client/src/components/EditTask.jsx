import { useForm } from "../hooks/useForm";
import { useTasks } from "../hooks/useTasks";

const EditTask = ({ setEditedTaskId, taskId }) => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        title: "",
        content: ""
    })

    const { updateTask } = useTasks();

    return (
        <form className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-5" onSubmit={(e) => { handleSubmit(e, (data) => updateTask(taskId, data)); resetForm(); setEditedTaskId(null); }}>
            <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
            />
            <textarea
                className="min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter content"
            >
                                                                    
            </textarea>
            <div className="flex flex-col gap-2 sm:flex-row">
                <button className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 cursor-pointer" type="submit">Save</button>
                <button className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 cursor-pointer" type="button" onClick={() => setEditedTaskId(null)}>Cancel</button>
            </div>
        </form>
    )
}

export default EditTask;