import { RouterProvider, createBrowserRouter, Route, Routes, BrowserRouter } from "react-router-dom"
import { Login } from "./pages/Login"
import { Blog } from "./pages/admin/screens/Blog"
import { MyBlogs } from "./pages/admin/screens/MyBlogs"
import React from "react"
import { Register } from "./pages/Register"
import { AdminLayout } from "./pages/admin/AdminLayout"
import { Admin } from "./pages/admin/screens/Admin"

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    index: true,
                    element: <Admin />
                },
                {
                    path: 'blogs',
                    element: <Blog />
                },
                {
                    path: 'my-blogs',
                    element: <MyBlogs />
                }
            ]
        },
        {
            path: '/',
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