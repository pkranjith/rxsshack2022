import React from 'react';
import './index.css'
import { Routes, Route, Link } from "react-router-dom"
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Wellness from "./Wellness";
import HomePage from "./HomePage";
import HappyHour from "./HappyHour";

function LandingPage() {
        return(
            <div className="main">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="wellness" element={<Wellness />}></Route>
                    <Route path="hangout" element={<HappyHour />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        )
    }

export const NotFound = () => {
    return <div>This is a 404 page</div>
}
export default LandingPage;
