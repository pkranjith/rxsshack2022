import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Background from './background2.png';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

class LandingPage extends React.Component {

    onClickWellness(){

    }

    render() {
        return (
            <div>
                <div className="header" style={{
                    marginLeft: "50px",
                    marginRight: "10px",
                    width: "100%",
                    marginBottom: "150px"
                }}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={"logo3.png"} style={{
                                width: "225px",
                                height: "150px"
                            }}/>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-3">
                            <div className="headerText">
                                Hi, Jane
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
                                                Chat over Coffee!
                                            </text>
                                            <text className={"catchUpText"}>
                                                Make the next steps easier! Get to know your peers and build your
                                                network.
                                            </text>

                                            <button className={"coffeeButton"} theme="pink">
                                                Get Started
                                            </button>


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
                                                Schedule happy hours and bond with the team over fun games, activities
                                                and much more!
                                            </text>
                                            <button className={"coffeeButton"} onClick={this.onClickWellness} theme="pink">
                                                Get Started
                                            </button>

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
                                                Schedule happy hours and bond with the team over fun games, activities
                                                and much more!
                                            </text>
                                            <button className={"coffeeButton"} theme="pink">
                                                Get Started
                                            </button>

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
                                                Schedule happy hours and bond with the team over fun games, activities
                                                and much more!
                                            </text>
                                            <button className={"coffeeButton"} theme="pink">
                                                Get Started
                                            </button>


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
}

//ReactDOM.render(<landingPage />, document.querySelector('#root'));

export default LandingPage;
