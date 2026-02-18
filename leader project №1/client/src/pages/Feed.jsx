import Posts from "../components/Posts";

const Feed = () => {
    return (
        <section className="w-full h-full p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-[30px] font-bold mb-8">Feed</h1>
                <Posts />
            </div>
        </section>
    )
}

export default Feed;