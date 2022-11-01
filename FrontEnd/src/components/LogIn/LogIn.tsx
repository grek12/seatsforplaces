import React from 'react';
import { PortalPage } from '../../pages';
import SignControls from '../SignControls';
import "./LogIn.scss"


export const LogIn: React.FC = () => {
    return (
        <PortalPage>
            <SignControls/>
        </PortalPage>
    );    
}