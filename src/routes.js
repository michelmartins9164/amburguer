import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import MaisVendidos from "./pages/MaisVendidos";

export const AllRoutes = () => {
    return (    
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/maisvendidos" element={<MaisVendidos/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );    
}