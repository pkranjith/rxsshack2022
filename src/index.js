import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    return (
        <div>
            <img src={"logo.png"} style={{width : "100%"}}/>



            <div style={{marginLeft : "100px"}}>

                <div style = {{width : "250px",
            backgroundColor: 'yellow',
            height: '375px'}}>
            <div style={{width : "100%", height : "75%"}}>

            </div>
            <img src={"logo.png"} style={{width : "100%", height : "25%", borderTopLeftRadius : 150 / 2}}/>
                </div>

            </div>



        </div>
    )
}
root.render(
    <App />
);
