import { RouterProvider, createBrowserRouter, Route, Routes, BrowserRouter } from "react-router-dom"
import { Login } from "./pages/Login"
import { Blog } from "./pages/admin/screens/Blog"
import { MyBlogs } from "./pages/admin/screens/MyBlogs"
import React from "react"
import { Register } from "./pages/Register"
import { AdminLayout } from "./pages/admin/AdminLayout"
import { Admin } from "./pages/admin/screens/Admin"
import { EditBlog } from "./pages/admin/screens/EditBlog"
import { Delete } from "./pages/admin/screens/Delete"

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
                }, {
                    path: 'edit/:id',
                    element: <EditBlog />
                },
                {
                    path: 'my-blogs',
                    element: <MyBlogs />,
                    children: [
                        {
                            path: 'delete',
                            element: <Delete />
                        }]
                },
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