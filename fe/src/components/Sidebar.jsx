import { Link } from "react-router-dom"
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineSpaceDashboard, MdOutlineProductionQuantityLimits, MdOutlineWifiProtectedSetup } from "react-icons/md";
import { ImDrawer2 } from "react-icons/im";
import { LuLineChart } from "react-icons/lu";
import React, { useState } from "react";

export const Sidebar = () => {

    const menus = [
        { name: "Dashboard", link: '/', icon: MdOutlineSpaceDashboard },
        { name: "Produk", link: '/', icon: MdOutlineProductionQuantityLimits },
        { name: "Produksi", link: '/', icon: MdOutlineWifiProtectedSetup },
        { name: "Bahan", link: '/', icon: ImDrawer2 },
        { name: "Peramalan", link: '/', icon: LuLineChart },
    ]

    const [open, setOpen] = useState(true)

    return (
        <section className="border flex gap-6">
            <div className={`bg-slate-300 min-h-screen px-4 ${open ? 'w-72' : 'w-16'} duration-700`}>
                <div className="flex justify-end py-3">
                    <HiMenuAlt3 size={25} className="cursor-pointer" onClick={() => setOpen(!open)}></HiMenuAlt3>
                </div>
                <div className="flex gap-4 flex-col mt-4">
                    {
                        menus.map((menu, i) => (
                            <Link to={menu.link} key={i} className={`flex items-center gap-3.5 p-2 font-medium rounded-md ${open ? 'bg-blue-300 shadow-md ' : 'bg-none '} hover:bg-blue-400 `}>
                                {/* <div className={`${open ? '' : 'p-2 rounded-md hover:bg-blue-400'}`}>{React.createElement(menu.icon, { size: "20" })}</div> */}
                                <div >{React.createElement(menu.icon, { size: "20" })}</div>
                                <h1 className={`${!open && 'overflow-hidden'}`}>{menu.name}</h1>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div>
                MENU
            </div>
        </section>
    )
}
