const Home = () => {
    return (
        <section className="rounded-2xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur sm:p-10">
            <p className="mb-3 inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
                Task Management
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Welcome to the ToDo List App
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Keep your work clear and structured with a clean, modern interface. Create tasks, track progress, and stay focused.
            </p>
        </section>
    )
}

export default Home;