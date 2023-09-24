import { createBrowserRouter } from "react-router-dom";
import Home from "../MainLayout/Home";
import HomePage from "../componets/HomePage/HomePage";
import ErrorPage from "../ErrorPage/ErrorPage";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: () => fetch('/data.json')
            }
        ]
    },
]);

export default myCreatedRouter;