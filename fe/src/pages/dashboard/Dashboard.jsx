const Dashboard = () => {
    return (
        <section className="bg-green-400 poppins h-[100%]">
            <div className="p-2">
                <div className="">
                    <h1 className="text-4xl">Hello Sir!</h1>
                </div>

                <div className="flex flex-col">
                    <div className="flex gap-5 text-center p-2">
                        <div className="p-5 w-full bg-green-300">Total User</div>
                        <div className="p-5 w-full bg-purple-500">Total Post</div>
                    </div>
                    <div className="flex text-center border p-2">
                        <div className="">Recent Blogs</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export { Dashboard }