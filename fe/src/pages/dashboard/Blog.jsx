import { Button } from "@/components/ui/button"
import { Form, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const Blog = () => {

    const [image, setImage] = useState("")
    const [preview, setPreview] = useState("")

    const loadImage = (e) => {
        const image = e.target.files[0];
        setImage(image);
        setPreview(URL.createObjectURL(image));
    }

    return (
        <section className="poppins">
            <div className=" p-2">
                <h1 className="text-4xl font-bold">Blog</h1>
                <div className="flex justify-end my-2">
                    <Button className="flex bg-blue-600 ">+ Create New</Button>
                </div>
                <Form>
                    <form onSubmit="" className="border space-y-8 w-full p-3 my-3 rounded-md">
                        <FormItem className="gap-3 grid">
                            <div className="gap-2 grid">
                                <Label>Title</Label>
                                <Input placeholder="Type your title here" className=""></Input>
                            </div>
                            <div className="gap-2 grid">
                                <Label>Content</Label>
                                <Textarea placeholder="Type your content here" className=""></Textarea>
                            </div>
                            <div className="gap-2 grid max-w-max">
                                <Label>Image</Label>
                                <Input placeholder="Masukkan password" type="file" className="file:h-10 p-0 file:cursor-pointer text-center file:bg-gray-400" onChange={loadImage}></Input>
                                <div className="w-32 h-32">
                                    {preview && (
                                        <img src={preview} alt="image" className="border h-full w-full object-cover" />
                                    )}
                                </div>
                            </div>
                        </FormItem>
                        <Button className="w-full bg-blue-600 shadow-md">Save</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}