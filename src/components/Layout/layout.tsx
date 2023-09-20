import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <h1>Media Slider</h1>
      </header>
      <main>{children}</main>
      <footer>Created by Patrick | 2023</footer>
    </>
  );
};

export default Layout;
