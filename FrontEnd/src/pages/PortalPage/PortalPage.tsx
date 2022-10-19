import React from "react";
import { Portal } from "../../ui-kit";
import { LogIn } from "../../components"
import "./PortalPage.scss";

export const PortalPage: React.FC = () => {
  return (
    <Portal className="PortalPage">
      <div className="Portal">
          <LogIn/>
      </div>
    </Portal>
  );
};

