import { Button } from "@/components/ui/button"
import { Form, FormItem } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { EditBlog } from "./EditBlog";
import { Delete } from "./Delete";
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md'


export const MyBlogs = () => {

    const [datas, setDatas] = useState([]);

    const handleButton = async (e) => {
        e.preventDefault()
    }

    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get(`http://localhost:3000/user/current`).then((res) => {

            if (res.data) {
                const data = res.data.data.post
                setDatas(data)
            }
        }).catch(e => {
            console.log(e.response)
        })
    }, [])

    return (
        <section className="poppins">
            <div className="p-2">
                <h1 className="text-4xl font-bold">My Blog</h1>
                <Form>
                    <form className="flex flex-wrap gap-5 py-3 my-3">
                        {
                            datas.map((data, i) => (
                                <FormItem className="basis-56" key={i}>
                                    <div className="border rounded-md p-2">
                                        <div>
                                            <img src={data.img} alt="image" className="border h-full w-full object-cover" />
                                        </div>
                                        <div className="my-2">
                                            <Label>{data.title}</Label>
                                        </div>
                                        <p className="border-b-2 my-3 border-b-gray-300 rounded-sm">{data.content}</p>
                                        <div className="flex gap-2 justify-between">

                                            <Link
                                                to={`/admin/edit/${data.id_post}`}
                                                key={i} >
                                                <div className="flex">
                                                    <Button><MdOutlineEdit />Edit</Button>
                                                </div>
                                            </Link>
                                            <Link
                                                to={'delete'}>
                                                <div className="flex">
                                                    <Delete></Delete>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                </FormItem>
                            ))
                        }
                    </form>
                </Form>
            </div>
        </section>
    )
}