import { Button } from "@/components/ui/button"
import { Form, FormControl, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import axios from "axios"
import { addBlog } from "@/services/blog-service"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const Blog = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [preview, setPreview] = useState("")

    const loadImage = (e) => {
        const image = e.target.files[0];
        setImage(image);
        setPreview(URL.createObjectURL(image));
    }

    const handlerPost = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("title", title)
        formData.append("content", content)
        formData.append("category", category)
        formData.append("image", image)

        // memanggil api
        try {
            await addBlog(formData, ((res) => {
                console.log(res.message)
            }));

        } catch (error) {
            console.log(error.response.data.errors)
        }
    }

    return (
        <section className="poppins">
            <div className=" p-2">
                <h1 className="text-4xl font-bold">Blog</h1>
                <Form>
                    <form onSubmit={handlerPost} className="border space-y-8 w-full p-3 my-6 rounded-md">
                        <FormItem className="gap-3 grid">
                            <div className="gap-2 grid">
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
                                <Select>
                                    {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="gap-2 grid w-full">
                                <Label>Image</Label>
                                <div className="flex gap-5 w-full">
                                    <Input
                                        type="file"
                                        className="max-w-max file:h-10 p-0 file:cursor-pointer text-center file:bg-gray-400"
                                        onChange={loadImage}></Input>
                                    <div className="w-32 h-32 border">
                                        {preview && (
                                            <img src={preview} alt="image" className=" h-full w-full object-cover" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </FormItem>
                        <Button type="submit" className="w-28 bg-blue-600 shadow-md">Save</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}