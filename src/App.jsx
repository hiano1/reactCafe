import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/error.jsx";
import { Home } from "./components/Home";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
        },
    ]);

    return <RouterProvider router={router} />;
};
