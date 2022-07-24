import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Background from './background2.png';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

class HappyHour extends React.Component {

//     onClickWellness(){
// window.history.pushState()
//     }

    render() {
        return (
            <div style={{padding: "45px 45px"}}>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
               <div>
                   <iframe width="1200" height="900" src="https://telnyx-meet-demo.vercel.app/rooms/1535b4cf-7076-4aa8-aa5b-b74fa0265029?client_toke[…]LxwloSIzigWKWGAiIFrfIzpIq5B80me8V13QI9FbEUYOThwUDgzzFCQ"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
               </div>
                <div style={{paddingLeft: "20px", width: "10px"}}>

                        <img src={"games.png"} style={{width: "480px", height:"900px"}}/>




                </div>
                <div>

                </div>
            </div>

            </div>
        )
    }
}


export default HappyHour;
