import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Outlet } from "react-router-dom"
import { Admin } from './screens/Admin'
import { Blog } from './screens/Blog'
import { EditBlog } from './screens/EditBlog'

export const AdminLayout = () => {
    return (
        <div className='flex gap-6'>
            <Sidebar></Sidebar>
            <main className='w-[100%] mr-[1%] my-[3%]'>
                <Outlet />
            </main>
        </div>
    )
}
