import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css'
import Background from './background2.png';
import { Routes, Route, Link } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Wellness from "./Wellness";

function ListOfPeople (){
        return (
            <div>
            <div style={{display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"}}>
                <text> Available Users</text>
                <button style={{border: "none", }} >
                    Get Started
                </button>
                {/*<button className={"coffeeButton"} >*/}
                    {/*Get Started*/}
                {/*</button>*/}
                {/*<button className={"coffeeButton"} >*/}
                    {/*Get Started*/}
                {/*</button>*/}
                {/*<button className={"coffeeButton"} >*/}
                    {/*Get Started*/}
                {/*</button>*/}
            </div>
            <button style={{border: "none", }} >
    Get Started
    </button>
            </div>
        );
    }




export default ListOfPeople;
