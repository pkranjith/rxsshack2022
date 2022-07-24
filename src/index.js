import React from 'react';
import './index.css';
import LandingPage from './LandingPage';
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
