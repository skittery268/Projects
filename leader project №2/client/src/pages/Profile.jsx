import { useState } from "react";
import { useAuth } from "../context/Auth.context";
import { useForm } from "../hooks/useForm";

const Profile = () => {
    const [edit1, setEdit1] = useState(false);
    const [edit2, setEdit2] = useState(false);
    const [edit3, setEdit3] = useState(false);
    const { user, editInfo } = useAuth();
    const [formData, handleChange, handleSubmit] = useForm({
        image: "",
        id: user._id,
        name: "",
        email: ""
    })
    
    return (
        <>
            <div className="h-50 w-250 border border-gray-400 rounded-[5px] relative left-70 top-10 ">
                <img src={!user.image ? "./icons/user2.png" : user.image} className="h-40 absolute rounded-full top-3 left-5" />
                <div className="absolute top-5 left-55 text-2xl bg-blue-200 w-130 h-10 rounded-[10px] flex justify-between items-center text-white">
                    {
                        edit1 ? (
                            <form onSubmit={(e) => { handleSubmit(e, editInfo), setEdit1(false) }}><input type="text" name="name" value={formData.name} onChange={handleChange} className="ml-5 rounded-[5px] placeholder:text-[20px] pl-2 outline-none text-black bg-white placeholder:text-gray-400" placeholder="Edit your name.." /></form>
                        ) : (
                            <h1 className="ml-5">{user.name}</h1>
                        )
                    }
                    {
                        edit1 ? (
                            <button className="mr-5 cursor-pointer" onClick={() => setEdit1(false)}><img src="./icons/close.png" className="h-4" /></button>
                        ) : (
                            <button className="mr-5 cursor-pointer" onClick={() => setEdit1(true)}><img src="./icons/pencil.png" className="h-4" /></button>
                        )
                    }
                </div>
                <div className="absolute top-20 left-55 text-2xl bg-blue-200 w-130 h-10 rounded-[10px] flex justify-between items-center text-white">
                    {
                        edit2 ? (
                            <form onSubmit={(e) => { handleSubmit(e, editInfo), setEdit2(false) }}><input type="email" name="email" value={formData.email} onChange={handleChange} className="ml-5 rounded-[5px] placeholder:text-[20px] pl-2 outline-none text-black bg-white placeholder:text-gray-400" placeholder="Edit your email.." /></form>
                        ) : (
                            <h1 className="ml-5">{user.email}</h1>
                        )
                    }
                    {
                        edit2 ? (
                            <button className="mr-5 cursor-pointer" onClick={() => setEdit2(false)}><img src="./icons/close.png" className="h-4" /></button>
                        ) : (
                            <button className="mr-5 cursor-pointer" onClick={() => setEdit2(true)}><img src="./icons/pencil.png" className="h-4" /></button>
                        )
                    }
                </div>
                <div className="absolute top-35 left-55 text-2xl bg-blue-200 w-130 h-10 rounded-[10px] flex justify-between items-center text-white">
                    {
                        edit3 ? (
                            <form onSubmit={(e) => { handleSubmit(e, editInfo), setEdit3(false) }}><input type="text" name="image" value={formData.image} onChange={handleChange} className="ml-5 rounded-[5px] placeholder:text-[20px] pl-2 outline-none text-black bg-white placeholder:text-gray-400" placeholder="Edit your profile image.." /></form>
                        ) : (
                            <h1 className="ml-5">Profile image..</h1>
                        )
                    }
                    {
                        edit3 ? (
                            <button className="mr-5 cursor-pointer" onClick={() => setEdit3(false)}><img src="./icons/close.png" className="h-4" /></button>
                        ) : (
                            <button className="mr-5 cursor-pointer" onClick={() => setEdit3(true)}><img src="./icons/pencil.png" className="h-4" /></button>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Profile;