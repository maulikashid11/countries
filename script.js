import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

const root = createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/:country',
                element: <CountryDetails />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)