import Background from "./background2.png";
import {Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import React, { useState }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Wellness from "./Wellness";

function HomePage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => {
        setShow(false);
        setShow1(true);};

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow1(false);
        setShow2(true);};
    return (
        <div>
            <div className="header" style={{
                marginRight: "10px",
                width: "100%",
                marginBottom: "150px",
                backgroundColor: "#ECF0F1"
            }}>
                <div className="row">
                    <div className="col-md-3" >
                        <img src={"logo3.png"} alt="logo" style={{
                            width: "225px",
                            height: "150px"
                        }}/>
                    </div>
                    <div className="col-md-7"></div>
                    <div className="col-md-1">
                        <div className="headerText headerRight" style={{marginTop: "30px"}}>
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
                                            Chat over coffee
                                        </text>
                                        <text className={"catchUpText"}>
                                            Make the next steps easier! Get to know your peers and build your
                                            network.
                                        </text>

                                        <button className={"coffeeButton"} onClick={handleShow}>
                                            Get Started
                                        </button>
                                        <text style={{display: "flex", margin:"25px 25px 0", fontSize: "10px"}} >
                                            Upcoming meet-ups:</text>
                                         <text style={{display: "flex", marginLeft: "25px", fontSize: "10px"}}>   Divya (July 25th, 7pm)
                                        </text>


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
                                            Walk-in to demos
                                        </text>
                                        <text className={"catchUpText"}>
                                            Join Demo sessions and learn about the newest products your peers are
                                            building.
                                        </text>
                                        <button className={"coffeeButton"} theme="pink">
                                            Join the live demo
                                        </button>

                                    </div>

                                    <img className={"coffeeImg"} alt="demos" src={"demos.jpg"}/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="coffeeDiv box-shadow">
                                    <div style={{width: "100%", height: "60%"}}>
                                        <text className={"catchUpHeading"}>
                                            Recharge & rejuvenate
                                        </text>
                                        <text className={"catchUpText"}>
                                            Take a break! Let our instructors guide you to relief from any accumulated
                                            stress.
                                        </text>
                                        <Link to="wellness" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className={"coffeeButton"} theme="pink">
                                                Let's relax
                                            </button>
                                        </Link>
                                    </div>

                                    <img className={"coffeeImg"} alt="yoga" src={"yoga2.jpg"}/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <img  alt="yoga" src={"extras.png"} style={{marginTop:"400px", width:"100%"}}/>


                </div>
            </div>
            <Modal  size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={show} onHide={handleClose}>

                <Modal.Body>
                    <button className={"Confirm"} onClick={handleShow1}>
                        Confirm
                    </button>
                </Modal.Body>

            </Modal>
            <Modal  size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={show1} onHide={handleClose1}>

                <Modal.Body>
                    <div style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"}}>
                        <text style={{fontSize: "32px"}}> Available Users</text>
                        <div style={{display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"}}>

                            <button onClick={handleShow2} style={{width: "500px", marginTop: "16px", height: "50px", border:"1px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white", borderRadius:"50px", display: "flex",

                                alignItems: "flex-start",
                                flexDirection: "row"}} >
                                <div style={{width:"50px", backgroundColor: "#D83D2E", height:"30px", borderRadius: "5px", color: "white", marginTop: "8px", marginLeft: "8px", paddingTop:"4px"   }}> SD</div>
                                <div style={{ paddingTop:"8px", paddingLeft: "20px", fontSize: "20px" }}>Sneha Didigam </div>
                            </button>
                            <button style={{width: "500px", marginTop: "16px", height: "50px", border:"1px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white", borderRadius:"50px", display: "flex",

                                alignItems: "flex-start",
                                flexDirection: "row"}} >
                                <div style={{width:"50px", backgroundColor: "#D83D2E", height:"30px", borderRadius: "5px", color: "white", marginTop: "8px", marginLeft: "8px", paddingTop:"4px"   }}> SV</div>
                                <div style={{ paddingTop:"8px", paddingLeft: "20px", fontSize: "20px" }}>Swetha Valiveru </div>
                            </button>
                            <button style={{width: "500px", marginTop: "16px", height: "50px", border:"1px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white", borderRadius:"50px", display: "flex",

                                alignItems: "flex-start",
                                flexDirection: "row"}} >
                                <div style={{width:"50px", backgroundColor: "#D83D2E", height:"30px", borderRadius: "5px", color: "white", marginTop: "8px", marginLeft: "8px", paddingTop:"4px"   }}> DB</div>
                                <div style={{ paddingTop:"8px", paddingLeft: "20px", fontSize: "20px" }}>Divya Battu </div>
                            </button>
                            <button style={{width: "500px", marginTop: "16px", height: "50px", border:"1px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white", borderRadius:"50px", display: "flex",

                                alignItems: "flex-start",
                                flexDirection: "row"}} >
                                <div style={{width:"50px", backgroundColor: "#D83D2E", height:"30px", borderRadius: "5px", color: "white", marginTop: "8px", marginLeft: "8px", paddingTop:"4px"   }}> RK</div>
                                <div style={{ paddingTop:"8px", paddingLeft: "20px", fontSize: "20px" }}>Ranjith Krishnan </div>
                            </button>
                            <button style={{width: "500px", marginTop: "16px", height: "50px", border:"1px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white", borderRadius:"50px", display: "flex",

                                alignItems: "flex-start",
                                flexDirection: "row"}} >
                                <div style={{width:"50px", backgroundColor: "#D83D2E", height:"30px", borderRadius: "5px", color: "white", marginTop: "8px", marginLeft: "8px", paddingTop:"4px"   }}> JD</div>
                                <div style={{ paddingTop:"8px", paddingLeft: "20px", fontSize: "20px" }}>John Doe </div>
                            </button>
                            <button style={{width: "500px", marginTop: "16px", height: "50px", border:"1px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white", borderRadius:"50px", display: "flex",

                                alignItems: "flex-start",
                                flexDirection: "row"}} >
                                <div style={{width:"50px", backgroundColor: "#D83D2E", height:"30px", borderRadius: "5px", color: "white", marginTop: "8px", marginLeft: "8px", paddingTop:"4px"   }}> FB</div>
                                <div style={{ paddingTop:"8px", paddingLeft: "20px", fontSize: "20px" }}>Frodo Baggins </div>
                            </button>
                            <button style={{width: "500px", marginTop: "16px", height: "50px", border:"1px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white", borderRadius:"50px", display: "flex",

                                alignItems: "flex-start",
                                flexDirection: "row"}} >
                                <div style={{width:"50px", backgroundColor: "#D83D2E", height:"30px", borderRadius: "5px", color: "white", marginTop: "8px", marginLeft: "8px", paddingTop:"4px"   }}> BG</div>
                                <div style={{ paddingTop:"8px", paddingLeft: "20px", fontSize: "20px" }}>Boomer Goldie </div>
                            </button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
            <Modal
                show={show2} onHide={handleClose2}>
                <Modal.Body>
                    <div style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"}}>

                        <text style={{ fontSize: "25px", fontStyle: "italic"}}> Success, enjoy your coffee time!</text>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default HomePage;