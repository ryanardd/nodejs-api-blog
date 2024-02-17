import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/Login"
import { Sidebar } from "./components/Sidebar"


function App() {

    const Layout = () => {
        return (
            // <Login />
            // <div> this is layout</div>
            <Sidebar></Sidebar>
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