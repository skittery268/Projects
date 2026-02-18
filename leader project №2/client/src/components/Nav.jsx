import { Link } from "react-router";
import { useAuth } from "../context/Auth.context";
import { useState } from "react";

const Nav = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const { user, logout } = useAuth();

    return (
        <header className="flex justify-center items-center">
            <div className="h-20"></div>
            <nav className="pt-3 h-20 w-full bg-blue-400 pb-3 fixed top-0 z-10">
                <Link to={"/"} className="text-[25px] text-white absolute top-4 left-20">Online Market</Link>
                <ul className="absolute top-6 left-100 flex justify-center items-center text-white gap-10">
                    <li><Link to={"/"} className="text-[17px] hover:text-[#e5e5e5] transition">Home</Link></li>
                    <li><Link to={"/shop"} className="text-[17px] hover:text-[#e5e5e5] transition">Shop</Link></li>
                </ul>
                {
                    open1 && (
                        <form className="absolute top-3.25 right-26">
                            <img src="./icons/search2.png" className="absolute left-3 h-5 top-2.5" />
                            <input type="text" name="search" placeholder="Search here..." className="border border-gray-300 bg-white rounded-[5px] outline-0 pl-10 text-[14px] w-100 h-10 mr-3 pr-3" />
                        </form>
                    )
                }
                {
                    open1 ? (
                        <button onClick={() => setOpen1(false)} className="cursor-pointer absolute right-20 top-6.25"><img src="./icons/cancel.png" className="h-5" /></button>
                    ) : (
                        <button onClick={() => setOpen1(true)} className="cursor-pointer absolute right-20 top-6.25"><img src="./icons/search.png" className="h-5" /></button>
                    )
                }
                <img src="./icons/settings.png" onClick={() => setOpen2(!open2)} className="absolute right-10 h-5 top-6 cursor-pointer" />

                {
                    open2 && (
                        <div className={`bg-white ${user ? "h-40" : "h-20"} w-50 absolute right-10 top-15 rounded-[5px] flex flex-col justify-center gap-3 pl-6 shadow`}>
                            {
                                !user ? (
                                    <>
                                        <Link to={"/login"} onClick={() => setOpen2(false)} className="text-gray-400 w-5 hover:text-blue-400 transition duration-300">Login</Link>
                                        <Link to={"/register"} onClick={() => setOpen2(false)} className="text-gray-400 w-5 hover:text-blue-400 transition duration-300">Register</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={"/profile"} onClick={() => setOpen2(false)} className="text-gray-400 w-25 hover:text-blue-400 transition duration-300">My Account</Link>
                                        <Link to={"/cart"} onClick={() => setOpen2(false)} className="text-gray-400 w-5 hover:text-blue-400 transition duration-300">Cart</Link>
                                        <Link to={"/wishlist"} onClick={() => setOpen2(false)} className="text-gray-400 w-20 hover:text-blue-400 transition duration-300">Whish List</Link>
                                        <button onClick={logout} className="text-[17px] text-gray-400 hover:text-red-500 text-start transition duration-300 cursor-pointer">Log Out</button>
                                    </>
                                )
                            }
                        </div>
                    )
                }
            </nav>
        </header>
    )
}

export default Nav;