import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Cart from './finalPages/Cart'
import Items from "./finalPages/Items";


const MyRoutes = () => {
    return <Router>
        <Routes>
            <Route path='/' element={<Items />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
};

export default MyRoutes;
