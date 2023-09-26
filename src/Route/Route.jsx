import { createBrowserRouter } from "react-router-dom";
import Home from "../MainLayout/Home";
import HomePage from "../componets/HomePage/HomePage";
import ErrorPage from "../ErrorPage/ErrorPage";
import CardDetails from "../componets/DonationCard/CardDetails";
import Donation from "../componets/DonationPage/Donation";
import Statistics from "../componets/PieChart/Statistics";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
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
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    },
]);

export default myCreatedRouter;