import { createBrowserRouter } from "react-router-dom";
import Home from "../MainLayout/Home";
import HomePage from "../componets/HomePage/HomePage";

const myCreatedRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        }
      ]
    },
  ]);

export default myCreatedRouter;