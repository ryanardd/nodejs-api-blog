const Admin = () => {
    return (
        <section className="poppins h-[100%]">
            <div className="p-2">
                <h1 className="text-4xl font-bold">Hello Sir!</h1>

                <div className="flex flex-col py-5">
                    <div className="flex gap-5 text-center py-2 text-xl">
                        <div className="p-5 w-full bg-green-300">
                            <h1>Total User</h1>
                            <h2>2</h2>
                        </div>
                        <div className="p-5 w-full bg-purple-500">
                            <h1>Total Post</h1>
                            <h2>2</h2>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="p-2 text-2xl bg-red-200 ">
                            <h1>Recent Blogs</h1>
                            <div className="blog">
                                <h1>1</h1>
                                <h1>12</h1>
                                <h1>13</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export { Admin }