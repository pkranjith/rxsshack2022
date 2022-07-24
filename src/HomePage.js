import Background from "./background2.png";
import {Link} from "react-router-dom";
import React from 'react';

function HomePage() {
    return (
        <div>
            <div className="header" style={{
                marginRight: "10px",
                width: "100%",
                marginBottom: "150px",
                backgroundColor: "#ECF0F1"
            }}>
                <div className="row">
                    <div className="col-md-3">
                        <img src={"logo3.png"} alt="logo" style={{
                            width: "225px",
                            height: "150px"
                        }}/>
                    </div>
                    <div className="col-md-7"></div>
                    <div className="col-md-1">
                        <div className="headerText headerRight">
                            Hi, Jane
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="headerRight">
                            <i class="fa fa-user fa-5x"></i>
                        </div>
                    </div>

                </div>
            </div>


            <div>
                <div className="bg_image"
                     style={{
                         backgroundImage: 'url(' + Background + ')',
                         backgroundSize: "cover",
                         height: "100vh"
                     }}>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Chat over Coffee
                                        </text>
                                        <text className={"catchUpText"}>
                                            Make the next steps easier! Get to know your peers and build your
                                            network.
                                        </text>

                                        <button className={"coffeeButton"} theme="pink">
                                            Get Started
                                        </button>


                                    </div>

                                    <img className={"coffeeImg"} alt="coffee" src={"coffee.jpg"}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Hangout with the team
                                        </text>
                                        <text className={"catchUpText"}>
                                            Schedule happy hours and bond with the team over fun games and activities!
                                        </text>
                                        <Link to="hangout" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className={"coffeeButton"} theme="pink">
                                                Join a happy hour
                                            </button>
                                        </Link>

                                    </div>

                                    <img className={"coffeeImg"} alt="happy" src={"happyHours.jpg"}/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Walk-in to Demos
                                        </text>
                                        <text className={"catchUpText"}>
                                            Join Demo sessions and learn about the newest products your peers are
                                            building.
                                        </text>
                                        <button className={"coffeeButton"} theme="pink">
                                            Get Started
                                        </button>

                                    </div>

                                    <img className={"coffeeImg"} alt="demos" src={"demos.jpg"}/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Recharge yourself
                                        </text>
                                        <text className={"catchUpText"}>
                                            Take a break! Let our instructors guide you to relief from any accumulated
                                            stress.
                                        </text>
                                        <Link to="wellness" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className={"coffeeButton"} theme="pink">
                                                Get Started
                                            </button>
                                        </Link>
                                    </div>

                                    <img className={"coffeeImg"} alt="yoga" src={"yoga2.jpg"}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;