import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Background from './background2.png';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    return (
        <div>
            <img src={"logo2.png"} style={{width: "100%"}}/>

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
                                            Chat over Coffee!
                                        </text>
                                        <text className={"catchUpText"}>
                                            Make the next steps easier! Get to know your peers and build your network.
                                        </text>

                                    </div>

                                    <img className={"coffeeImg"} src={"coffee.jpg"}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Hangout with the team!
                                        </text>
                                        <text className={"catchUpText"}>
                                            Schedule happy hours and bond with the team over fun games, activities and much more!
                                        </text>

                                    </div>

                                    <img className={"coffeeImg"} src={"coffee.jpg"}/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Hangout with the team!
                                        </text>
                                        <text className={"catchUpText"}>
                                            Schedule happy hours and bond with the team over fun games, activities and much more!
                                        </text>

                                    </div>

                                    <img className={"coffeeImg"} src={"coffee.jpg"}/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Hangout with the team!
                                        </text>
                                        <text className={"catchUpText"}>
                                            Schedule happy hours and bond with the team over fun games, activities and much more!
                                        </text>

                                    </div>

                                    <img className={"coffeeImg"} src={"coffee.jpg"}/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

root.render(
    <App/>
);
