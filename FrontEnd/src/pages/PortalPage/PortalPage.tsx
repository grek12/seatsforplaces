import React from "react";
import { Portal } from "../../ui-kit";
import "./PortalPage.scss";

interface IProps{
  children : React.ReactNode
}

export const PortalPage: React.FC<IProps> = ({children}) => {
  return (
    <Portal className="PortalPage">
      <div className="Portal">
        {children}
      </div>
    </Portal>
  );
};

