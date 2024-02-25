import { Button } from "@/components/ui/button"
import { Form, FormItem } from "@/components/ui/form"
import rect from "../../assets/ab1927.png"
import { Label } from "@/components/ui/label"
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

export const MyBlogs = () => {

    const [datas, setDatas] = useState([]);
    const [posts, setPosts] = useState('');

    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get(`http://localhost:3000/user/current`).then((res) => {

            if (res.data) {
                // setAuth(true)
                // setUsername(res.data.payload.data.username)
                // console.log(res.data)
                console.log(res.data.data.post)
                setDatas(res.data.data.post)
            }
        }).catch(e => {
            console.log(e.response)
            // setAuth(false)
            // navigate('/login')
            // setMessage(res.data.payload.data.errors)
        })
    }, [])

    return (
        <section className="poppins">
            <div className="p-2">
                <h1 className="text-4xl font-bold">My Blog</h1>
                <Form>
                    <form onSubmit="" className="flex flex-wrap gap-5 py-3 my-3">
                        {
                            datas.map((data, i) => (
                                <FormItem className="basis-56" key={i}>
                                    <div className="border rounded-md p-2">
                                        <div>
                                            <img src={`http://localhost:3000/images/${data.img}`} alt="image" className="border h-full w-full object-cover" />
                                        </div>
                                        <div className="my-2">
                                            <Label>{data.title}</Label>
                                        </div>
                                        <p className="border-b-2 my-3 border-b-gray-300 rounded-sm">{data.content}</p>
                                        <div className="flex gap-2 justify-between">
                                            <Button className=" bg-blue-500 hover:bg-sky-600"><MdOutlineEdit className="" />Edit</Button>
                                            <Button className=" bg-red-500 hover:bg-rose-600"><MdDeleteOutline />Delete</Button>
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