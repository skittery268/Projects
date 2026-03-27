import { useAuth } from "../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

    return (
        <section className="mx-auto w-full max-w-xl rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
            <h1 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Profile</h1>

            <div className="space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Name</p>
                    <p className="mt-1 text-base font-medium text-slate-900">{user.name}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</p>
                    <p className="mt-1 text-base font-medium text-slate-900">{user.email}</p>
                </div>
            </div>
        </section>
    )
}

export default Profile;