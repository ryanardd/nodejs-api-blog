import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertDialog } from '@/components/ui/alert-dialog'
import { getBlogId } from '@/services/blog-service'
import { useParams } from "react-router-dom"

export const EditBlog = () => {

    const [preview, setPreview] = useState("")
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams();

    axios.defaults.withCredentials = true
    useEffect(() => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        await getBlogId(id, ((event) => {
            setTitle(event.title);
            setContent(event.content);
            setCategory(event.category.name);
            setPreview(event.img);
        }));
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setImage(image);
        setPreview(URL.createObjectURL(image));
    }

    const handleSelect = (e) => {
        setCategory(e.target.value)
    }

    return (
        <section className="poppins">
            <AlertDialog>
                <div className=" p-2">
                    <h1 className="text-4xl font-bold">Edit Blog</h1>
                    <Form>
                        <form onSubmit={'handlerPost'} className="border space-y-8 w-full p-3 my-6 rounded-md">
                            <FormItem className="gap-3 grid-cols-2 grid space-y-0">
                                <div className='gap-3 grid'>
                                    <div className="gap-2  grid">
                                        <Label>Title</Label>
                                        <Input
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            type="text"
                                            placeholder="Type your title here"></Input>
                                    </div>
                                    <div className="gap-2 grid">
                                        <Label>Content</Label>
                                        <Textarea
                                            value={content}
                                            onChange={e => setContent(e.target.value)}
                                            type="text"
                                            placeholder="Type your content here"></Textarea>
                                    </div>
                                    <div className="gap-2 grid">
                                        <Label>Category</Label>
                                        <Select defaultValue={category}>
                                            {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                                            <SelectTrigger >
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent >
                                                <SelectItem value={"m@example.com"}>m@example.com</SelectItem>
                                                <SelectItem value="m@google.com">m@google.com</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="gap-2 grid w-full">
                                        <Label>Image</Label>
                                        <div className="grid gap-5 w-full">
                                            <Input
                                                type="file"
                                                className="max-w-max file:h-10 p-0 file:cursor-pointer text-center file:bg-gray-400"
                                                onChange={loadImage}></Input>
                                            <div className="w-[350px] border">
                                                {preview && (
                                                    <img src={preview} alt="image" className=" h-full w-full object-cover" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FormItem>

                            <Button type="submit" className="shadow-md">Save</Button>
                        </form>
                    </Form>
                </div>
            </AlertDialog>
        </section>
    )
}