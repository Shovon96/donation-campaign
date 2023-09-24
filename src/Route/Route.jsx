import { createBrowserRouter } from "react-router-dom";
import Home from "../MainLayout/Home";
import HomePage from "../componets/HomePage/HomePage";
import ErrorPage from "../ErrorPage/ErrorPage";
import CardDetails from "../componets/DonationCard/CardDetails";

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
            },
            {
                path: '/cardDetails/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    },
]);

export default myCreatedRouter;