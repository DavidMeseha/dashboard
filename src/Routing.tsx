import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import App from "./App";
import Users from "./pages/Users";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/users", element: <Users /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
