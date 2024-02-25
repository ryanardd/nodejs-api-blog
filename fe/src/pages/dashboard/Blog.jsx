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
                <Form>
                    <form onSubmit={""} className="border space-y-8 w-full p-3 my-6 rounded-md">
                        <FormItem className="gap-3 grid">
                            <div className="gap-2 grid">
                                <Label>Title</Label>
                                <Input placeholder="Type your title here" className=""></Input>
                            </div>
                            <div className="gap-2 grid">
                                <Label>Content</Label>
                                <Textarea placeholder="Type your content here" className=""></Textarea>
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
                        <Button className="w-28 bg-blue-600 shadow-md">Save</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}