import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Layout from "./components/Layout/layout";
import { ItemProvider } from "./context/sliderItemContext";
import RoutesProvider from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemProvider>
      <Layout>
        <RoutesProvider />
      </Layout>
    </ItemProvider>
  </React.StrictMode>
);
