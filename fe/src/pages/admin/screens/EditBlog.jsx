import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MdOutlineEdit } from 'react-icons/md'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const EditBlog = () => {

    const [preview, setPreview] = useState("")
    const loadImage = (e) => {
        const image = e.target.files[0];
        setImage(image);
        setPreview(URL.createObjectURL(image));
    }

    return (
        <div className="">
            <Dialog className="h-20">
                <DialogTrigger asChild>
                    <Button><MdOutlineEdit></MdOutlineEdit>Edit</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Edit Blog</DialogTitle>
                        <DialogDescription>
                            Make changes to your blogs here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label>
                                Title
                            </Label>
                            <Input
                                // value={'title'}
                                // onChange={'e => setTitle(e.target.value)'}
                                type="text"
                                placeholder="Type your title here"
                                className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label>Content</Label>
                            <Textarea
                                // value={'content'}
                                // onChange={'e => setContent(e.target.value)'}
                                type="text"
                                placeholder="Type your content here"
                                className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label>Category</Label>
                            <Select>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 gap-4 relative z-50">
                            <Label>Image</Label>
                            <div className="flex gap-5 col-span-3">
                                <Input
                                    type="file"
                                    className="max-w-max file:h-10 p-0 file:cursor-pointer text-center file:bg-gray-400"
                                    onChange={loadImage} />
                                <div className="w-32 h-32 border">
                                    {preview && (
                                        <img src={preview} alt="image" className=" h-full w-full object-cover" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}