import Posts from "../components/Posts";
import UploadPosts from "../components/UploadPosts";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const { user } = useAuth();

    return (
        <section className="w-full h-full p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8 p-6 border border-gray-300 bg-gray-50 rounded-lg">
                    <h1 className="text-[28px] font-bold mb-3 text-gray-800">Profile</h1>
                    <p className="text-[16px] text-gray-700 mb-2"><span className="font-semibold">Name:</span> {user.userName}</p>
                    <p className="text-[16px] text-gray-700"><span className="font-semibold">Email:</span> {user.userEmail}</p>
                </div>

                <div className="mb-8 p-6 border border-gray-300 bg-gray-50 rounded-lg">
                    <h2 className="text-[24px] font-bold mb-4">Create Post</h2>
                    <UploadPosts />
                </div>
                <div className="p-6 border border-gray-300 bg-gray-50 rounded-lg">
                    <h1 className="text-[24px] font-bold mb-4">My posts</h1>
                    <Posts profile={1} />
                </div>
            </div>
        </section>
    )
}

export default Profile;