import React from "react";
import { Routes, Route } from 'react-router-dom'
import DashboardPage from "./pages/DashboardPage";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const Router = ()=>{
    return(
        <Routes>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegistrationPage />}/>
            <Route path='/dashboard' element={<DashboardPage />}/>
        </Routes>
    )
}

export default Router