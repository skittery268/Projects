import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const Register = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        name: "",
        email: "",
        password: ""
    })

    const { register } = useAuth();

    return (
        <section className="mx-auto w-full max-w-md rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
            <h1 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Register</h1>

            <form className="space-y-4" onSubmit={(e) => { handleSubmit(e, register); resetForm() }}>
                <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                />
                <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                />
                <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                />
                <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 cursor-pointer" type="submit">
                    Register
                </button>
            </form>
        </section>
    )
}

export default Register;