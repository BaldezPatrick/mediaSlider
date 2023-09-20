import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home";
import Layout from "./components/Layout/layout";
import Article from "./pages/Article";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ItemProvider } from "./context/sliderItemContext";
import Catalog from "./pages/Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "article/:id",
    element: <Article />,
  },
  {
    path: "catalog",
    element: <Catalog />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ItemProvider>
  </React.StrictMode>
);
