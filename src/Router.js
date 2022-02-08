import { BrowserRouter as Router, Routers, Route } from "react-router-dom"
import React from 'react';
import Mainpage from "./finalPages/Mainpage";

const MyRoutes = () => {
    return 
    <Router>
        <Routers>
            <Route path='/' element={<Mainpage />} />
        </Routers>
    </Router>
}

export default MyRoutes;
