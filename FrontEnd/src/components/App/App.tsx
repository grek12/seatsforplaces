import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import { MainPage } from "../../pages";
import CreateMeetingPage from "../../pages/CreateMeetingPage";
import Layout from "../Layout";

export const App: React.FC = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path='/CreateMeeting' element={<CreateMeetingPage/>}/>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Layout>
        </div>
    );
};