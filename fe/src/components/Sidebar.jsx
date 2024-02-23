import { Link, NavLink } from "react-router-dom"
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineSpaceDashboard, MdOutlineProductionQuantityLimits, MdOutlineWifiProtectedSetup } from "react-icons/md";
import { ImDrawer2 } from "react-icons/im";
import { LuLineChart } from "react-icons/lu";
import React, { useState } from "react";

export const Sidebar = ({ children }) => {

    const menus = [
        { name: "Dashboard", path: '/', icon: MdOutlineSpaceDashboard },
        { name: "New Blog", path: '/blog', icon: MdOutlineProductionQuantityLimits },
        { name: "My Blogs", path: '/blogs', icon: MdOutlineWifiProtectedSetup },
        { name: "Logout", path: '/logout', icon: ImDrawer2, margin: "true" },
    ]

    const [open, setOpen] = useState(true)
    const [click, setClick] = useState(0)

    const handleTabClick = (index) => {
        setClick(index);
    };

    return (
        <section className="flex gap-6">
            <div className={`bg-slate-100 min-h-screen px-2 ${open ? 'w-72' : 'w-16 '} duration-700`}>
                <div className={`flex justify-end py-3 ${open ? '' : ' -translate-x-2 '}`}>
                    <HiMenuAlt3 size={25} className="cursor-pointer" onClick={() => setOpen(!open)}></HiMenuAlt3>
                </div>
                <div className="flex gap-6 flex-col mt-4">
                    {
                        menus.map((menu, i) => (
                            <Link to={menu.path} key={i}
                                onClick={() => handleTabClick(i)}
                                className={`${menu?.margin && 'mt-[100%]'} ${click === i ? "bg-blue-400" : ""} flex items-center gap-3.5  font-medium rounded-md ${open ? 'bg-blue-100 shadow-md p-3' : 'bg-none '} hover:bg-blue-400 `}>
                                <div className={` ${open ? '' : ' rounded-md p-3 hover:bg-blue-400'} ${click === i ? "bg-blue-400" : ""}`}>{React.createElement(menu.icon, { size: "24" })}</div>
                                <h1 className={`${!open && 'translate-x-7 opacity-0 overflow-hidden duration-500'}`}>{menu.name}</h1>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="w-[100%] mr-[1%] mt-[3%]">
                {children}
            </div>
        </section>
    )
}
