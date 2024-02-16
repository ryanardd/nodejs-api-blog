import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/Login"


function App() {

    const Layout = () => {
        return (
            // <Login />
            <div> this is layout</div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    // path: "/",
                    // element: <Login />,
                }
            ]
        },
        {
            path: '/login',
            element: <Login />
        }
    ])

    return < RouterProvider router={router} ></RouterProvider>
}

export default App