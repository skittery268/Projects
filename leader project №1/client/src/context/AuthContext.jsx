import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)

const API_URL = "http://localhost:3000/api";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const isLogged = JSON.parse(localStorage.getItem("user"));

        if (!isLogged) return;

         
        setUser(isLogged);
        navigate("/profile");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const login = async (formData) => {
        try {
            const res = await fetch(API_URL + "/user/login", {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/profile');
        } catch(err) {
            console.log(err);
        }
    }

    const register = async (formData) => {
        try {
            const res = await fetch(API_URL + "/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            navigate("/login");
        } catch(err) {
            console.log(err);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, logout, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}