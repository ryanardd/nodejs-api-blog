import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Form, FormItem } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"


export const Login = () => {
    return (
        <div className="bg-[#0F0F0F] h-screen">
            <div className="container poppins">
                <div className="h-screen flex justify-center items-center">
                    <Form>
                        <form onSubmit="" className="text-white space-y-8 w-full md:w-[50%] lg:w-[30%] rounded-md bg-[#191919] p-7 shadow-[-5px_-6px_5px_rgba(121,22,87,0.3),4px_10px_15px_#9966ff]">
                            <h1 className="text-center text-3xl">
                                <div className="text-center text-5xl">♻️</div>
                                Welcome Back!
                                <p className="text-xs text-gray-400">Please enter your details.</p>
                            </h1>
                            <FormItem className="gap-3 grid">
                                <div className="gap-2 grid">
                                    <Label>Username</Label>
                                    <Input placeholder="Masukkan username" className="text-black bg-[#121212] border-[#191919] shadow-sm shadow-[#121212] focus-visible:ring-offset-0"></Input>
                                </div>
                                <div className="gap-2 grid">
                                    <Label>Password</Label>
                                    <Input placeholder="Masukkan password" className="text-black bg-[#121212] border-[#191919] shadow-sm shadow-[#121212] focus-visible:ring-offset-0"></Input>
                                </div>

                            </FormItem>
                            <Button className="w-full bg-blue-600 shadow-md">Login</Button>
                            <p className="text-center text-sm">Don't have an account yet? <Link className="text-blue-500">Register</Link></p>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}