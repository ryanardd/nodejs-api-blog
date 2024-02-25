import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Form, FormItem } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useState } from "react"
import axios from "axios"


export const Login = () => {

    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const [alert, setAlert] = useState()

    const navigate = useNavigate('/');

    axios.defaults.withCredentials = true;

    const handlerLogin = async (e) => {
        e.preventDefault();

        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        try {
            await axios.post('http://localhost:3000/user/login/', data).then((res) => {
                const response = res.data;

                if (response) {
                    navigate('/')
                }
            })
        } catch (error) {
            setAlert(error.response.data.errors)
        }
    }


    return (
        <div className="bg-[#0F0F0F] h-screen">
            <div className="container poppins">
                <div className="h-screen flex justify-center items-center">
                    <Form>
                        <form onSubmit={handlerLogin} className="text-white space-y-8 w-full md:w-[50%] lg:w-[30%] rounded-md bg-[#191919] p-7 shadow-[-5px_-6px_5px_rgba(121,22,87,0.3),4px_10px_15px_#9966ff]">
                            <h1 className="text-center text-3xl">
                                <div className="text-center text-5xl">♻️</div>
                                Welcome Back!
                                <p className="text-xs text-gray-400">Please enter your details.</p>
                            </h1>
                            <div className="text-center">
                                <p
                                    className={`text-xs text-red-500 ${alert ? 'opacity-1 duration-700' : 'opacity-0 '}`}
                                >{alert}</p>
                            </div>
                            <FormItem className="gap-3 grid">
                                <div className="gap-2 grid">
                                    <Label>Username</Label>
                                    <Input
                                        onChange={e => setValues({
                                            ...values, username: e.target.username
                                        })}
                                        type="text"
                                        name="username"
                                        placeholder="Type your username here"
                                        className="text-white bg-[#121212] border-[#191919] shadow-sm shadow-[#121212] focus-visible:ring-offset-0"></Input>
                                </div>
                                <div className="gap-2 grid">
                                    <Label>Password</Label>
                                    <Input
                                        onChange={e => setValues({
                                            ...values, password: e.target.password
                                        })}
                                        type="password"
                                        name="password"
                                        placeholder="Type your password here"
                                        className="text-white bg-[#121212] border-[#191919] shadow-sm shadow-[#121212] focus-visible:ring-offset-0"></Input>
                                </div>

                            </FormItem>
                            <Button type="submit" className="w-full bg-blue-600 shadow-md">Login</Button>
                            <p className="text-center text-sm">Don't have an account yet? <Link to={'/register'} className="text-blue-500">Register</Link></p>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}