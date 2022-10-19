import React, { ReactNode } from "react";
import Header from "../Header";
import "./Layout.scss";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
        <Header/>
      <div className="Layout-Container">{children}</div>
    </div>
  );
};
