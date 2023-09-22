import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/Article";
import Catalog from "../pages/Catalog";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "artigo/:id",
    element: <Article />,
  },
  {
    path: "catalogo",
    element: <Catalog />,
  },
]);

const RoutesProvider: React.FC = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default RoutesProvider;
