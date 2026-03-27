import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const PostsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePosts = () => useContext(PostsContext);

const API_URL = "http://localhost:3000/api";

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const { user } = useAuth();

    const uploadPost = async (formData) => {
        try {
            const res = await fetch(API_URL + "/post", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({ ...formData, userId: user.id })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setPosts([ ...posts, data ]);
        } catch (err) {
            console.log(err);
        }
    }

    const getPosts = async (userId = 0) => {
        try {
            const res = await fetch(`${API_URL}/post${userId ? `?userId=${userId}` : ""}`);

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <PostsContext.Provider value={{ posts, uploadPost, getPosts }}>
            {children}
        </PostsContext.Provider>
    )
}