import React from "react";
import { Routes, Route } from 'react-router-dom'

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const Router = ()=>{
    return(
        <Routes>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegistrationPage />}/>
        </Routes>
    )
}

export default Router