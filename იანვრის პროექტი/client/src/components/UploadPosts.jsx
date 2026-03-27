import { usePosts } from "../context/PostsContext";
import { useForm } from "../hooks/useForm";

const UploadPosts = () => {
    const [formData, handleInput, handleSubmit] = useForm({
        title: "",
        content: ""
    })

    const { uploadPost } = usePosts();

    return (
        <form onSubmit={(e) => handleSubmit(e, uploadPost)} className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="title" className="text-[16px] font-semibold mb-2">Title</label>
                <input className="outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:shadow-blue-400 border border-gray-300 p-2 transition-all rounded" type="text" id="title" name="title" onChange={handleInput} value={formData.title} required />
            </div>
            <div className="flex flex-col">
                <label htmlFor="content" className="text-[16px] font-semibold mb-2">Content</label>
                <textarea className="outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:shadow-blue-400 border border-gray-300 p-2 transition-all rounded resize-none" id="content" name="content" value={formData.content} onChange={handleInput} required rows="6"></textarea>
            </div>
            <button type="submit" className="w-full h-10 mt-2 hover:bg-gray-800 rounded-lg bg-black cursor-pointer text-[16px] text-white font-semibold">Submit</button>
        </form>
    )
}

export default UploadPosts;