import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/error.jsx";
import { Root } from "./routes/root.jsx";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <Error />,
        },
    ]);

    return <RouterProvider router={router} />;
};
