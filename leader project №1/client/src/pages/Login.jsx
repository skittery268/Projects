import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";

const Login = () => {
    const [formData, handleInput, handleSubmit] = useForm({
        userEmail: "",
        userPassword: ""
    });

    const { login } = useAuth();
    
    return (
        <div className="flex justify-center items-center w-full h-full">
            <form className="flex relative justify-center border bg-gray-50 border-gray-300 items-center flex-col mt-10 borde w-100 h-100" onSubmit={(e) => handleSubmit(e, login)}>
                <h1 className="absolute text-[30px] top-5">Login</h1>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-[20px]">Email</label>
                    <input className="outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:shadow-blue-400 border border-gray-300 w-70 h-8 p-2 transition-all" type="email" id="email" required name="userEmail" value={formData.userEmail} onChange={handleInput} />
                </div>
                <br />
                <div className="flex flex-col">
                    <label htmlFor="pass" className="text-[20px]">Password</label>
                    <input className="outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:shadow-blue-400 border border-gray-300 w-70 h-8 p-2 transition-all" type="password" id="pass" required name="userPassword" value={formData.userPassword} onChange={handleInput} />
                </div>
                <br />
                <button type="submit" className="w-70 h-14 mt-5 hover:bg-gray-800 rounded-[20px] bg-black cursor-pointer text-[20px] text-white">Submit</button>
            </form>
        </div>
    )
}

export default Login;