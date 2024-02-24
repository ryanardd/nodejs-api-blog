import { RouterProvider, createBrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Sidebar } from "./components/Sidebar"
import { Dashboard } from "./pages/dashboard/Dashboard"
import { Blog } from "./pages/dashboard/Blog"
import { MyBlogs } from "./pages/dashboard/MyBlogs"
import React from "react"
import { Register } from "./pages/Register"

const App = () => {

    const router = createBrowserRouter([

        {
            path: '/',
            element: <Sidebar children={
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blogs" element={<MyBlogs />} />
                </Routes>
            } />,
            children: [
                {
                    path: '/',
                },
                {
                    path: '/blog',
                },
                {
                    path: '/blogs',
                }
            ]
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ])


    return <RouterProvider router={router}></RouterProvider>

}

export default App