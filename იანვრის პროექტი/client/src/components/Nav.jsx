import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
    const { logout, user } = useAuth();

    return (
        <nav className="bg-gray-50 border-b h-15 w-full justify-center items-center flex border-b-gray-200">
            <ul className="flex w-full justify-between ml-10 mr-10 items-center">
                <h1 className="text-[20px]">Social Media</h1>
                <div className="min-w-80 flex justify-between">
                    {
                        user ? (
                            <>
                                <li className="text-[18px] hover:text-gray-700"><Link to={"/"}>Home</Link></li>
                                <li className="text-[18px] hover:text-gray-700"><Link to={"/feed"}>Feed</Link></li>
                                <li className="text-[18px] hover:text-gray-700"><Link to={"/profile"}>Profile</Link></li>
                                <li className="text-[18px]"><button className="hover:text-red-600 cursor-pointer" onClick={logout}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li className="text-[18px] hover:text-gray-700"><Link to={"/"}>Home</Link></li>
                                <li className="text-[18px] hover:text-gray-700"><Link to={"/register"}>Register</Link></li>
                                <li className="text-[18px] hover:text-gray-700"><Link to={"/login"}>Login</Link></li>
                            </>
                        )
                    }
                </div>
            </ul>
        </nav>
    )
}

export default Nav;