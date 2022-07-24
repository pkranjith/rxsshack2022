import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Background from './background.png';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    return (
        <div>
            <img src={"logo.png"} style={{width : "100%"}}/>


<div>
    <div
        className="bg_image"
        style={{
            backgroundImage: 'url(' + Background + ')',
            backgroundSize: "cover",
            height: "100vh"
        }}>

        <div style={{paddingLeft : "100px"}}>
        <div>
            <div className={"coffeeDiv"}>
                <div style={{width : "100%", height : "60%"}}>
                    <text className={"catchUpHeading"} >
                        Catch up over Coffee!
                    </text>
                    <text className={"catchUpText"} >
                        Make the next steps easier! Get to know your peers and build your network.
                    </text>

                </div>

                <img className={"coffeeImg"} src={"coffee.jpg"} />
            </div>

        </div>
        </div>



    </div>
</div>
</div>
    )
}
root.render(
    <App />
);
