import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Nav = () => {
    const { user, logout } = useAuth();

    const navItemClass = ({ isActive }) =>
        `rounded-lg px-3 py-2 text-sm font-medium transition ${
            isActive
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        }`;

    return (
        <header className="sticky top-0 z-20 border-b border-white/40 bg-white/80 backdrop-blur">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
                    ToDo Modern
                </Link>

                <ul className="flex items-center gap-2 sm:gap-3">
                    <li>
                        <NavLink to="/" className={navItemClass}>
                            Home
                        </NavLink>
                    </li>
                    {
                        user ? (
                            <>
                                <li>
                                    <NavLink to="/profile" className={navItemClass}>
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tasks" className={navItemClass}>
                                        Tasks
                                    </NavLink>
                                </li>
                                <li>
                                    <button onClick={logout} className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login" className={navItemClass}>
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className={navItemClass}>
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Nav;