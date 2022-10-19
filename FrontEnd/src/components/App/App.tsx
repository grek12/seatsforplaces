import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import { MainPage } from "../../pages";
import Layout from "../Layout";

export const App: React.FC = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Layout>
        </div>
    );
};