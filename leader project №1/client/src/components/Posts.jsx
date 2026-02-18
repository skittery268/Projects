import { useEffect } from "react";
import { usePosts } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";

const Posts = ({ profile = 0 }) => {
    const { posts, getPosts } = usePosts();
    const { user } = useAuth();

    useEffect(() => {
        if (profile) {
            getPosts(user.id);
            return;
        }

        getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="flex flex-col gap-4">
            {
                posts.map((post, index) => {
                    return (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow">
                            <h1 className="text-[20px] font-bold mb-2 text-gray-800">{post.title}</h1>
                            <h2 className="text-[14px] text-gray-600 leading-relaxed">{post.content}</h2>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Posts;