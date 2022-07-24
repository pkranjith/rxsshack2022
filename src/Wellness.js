import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Background from './background2.png';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

class Wellness extends React.Component {

//     onClickWellness(){
// window.history.pushState()
//     }

    render() {
        return (
            <div style={{padding: "100px 150px"}}>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
               <div>
                   <iframe width="1000" height="620" src="https://www.youtube.com/embed/s8RDWogbqh0"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
               </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: "30px"}}>
                    <iframe  width="430" height="300" src="https://www.youtube.com/embed/rYQXIaUWBVg"
                             title="YouTube video player" frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen></iframe>
                    <div style={{paddingTop: "20px"}}><iframe width="430" height="300" src="https://www.youtube.com/embed/6fnLKyRJsrs"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>

                </div>
                <div>

                </div>
            </div>
                <div style={{ display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>
                    <button style={{
                        padding: "10px 42px",
                         backgroundColor: "#D83D2E",
                         color: "white",
                        border: "none",
                        fontSize: "16px",
                        borderRadius: "5px",
                        margin: "30px 0",
                    }} >
                        Join yoga session with Sam
                    </button>
                    {/*<a href={"https://telnyx-meet-demo.vercel.app/rooms/1535b4cf-7076-4aa8-aa5b-b74fa0265029?client_toke[…]LxwloSIzigWKWGAiIFrfIzpIq5B80me8V13QI9FbEUYOThwUDgzzFCQ"}*/}
                    {/*style={{margin: "30px 0",fontSize: "32px" }}>*/}
                        {/*Join yoga session with Sam*/}
                    {/*</a>*/}


                </div>

            </div>
        )
    }
}


export default Wellness;
