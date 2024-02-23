import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/Login"
import { Sidebar } from "./components/Sidebar"
import { Dashboard } from "./pages/dashboard/Dashboard"
import { Blog } from "./pages/dashboard/Blog"
import { MyBlogs } from "./pages/dashboard/MyBlogs"
import React from "react"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
            </Routes>

            <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/blogs" element={<MyBlogs />}></Route>
                </Routes>
            </Sidebar>
        </BrowserRouter>

    )
}

export default App