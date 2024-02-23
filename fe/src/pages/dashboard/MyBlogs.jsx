import { Button } from "@/components/ui/button"
import { Form, FormItem } from "@/components/ui/form"
import rect from "../../assets/ab1927.png"
import { Label } from "@/components/ui/label"
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

export const MyBlogs = () => {
    return (
        <section className="poppins">
            <div className="p-2">
                <h1 className="text-4xl font-bold">My Blog</h1>
                <Form>
                    <form onSubmit="" className="flex flex-wrap gap-5 py-3 my-3">
                        <FormItem className="basis-56">
                            <div className="border rounded-md p-2">
                                <div>
                                    <img src={rect} alt="image" className="border h-full w-full object-cover" />
                                </div>
                                <div className="my-2">
                                    <Label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dignissimos.</Label>
                                </div>
                                <p className="border-b-2 my-3 border-b-gray-300 rounded-sm"></p>
                                <div className="flex gap-2 justify-between">
                                    <Button className=" bg-blue-500 hover:bg-sky-600"><MdOutlineEdit className="" />Edit</Button>
                                    <Button className=" bg-red-500 hover:bg-rose-600"><MdDeleteOutline />Delete</Button>
                                </div>
                            </div>
                        </FormItem>
                    </form>
                </Form>
            </div>
        </section>
    )
}