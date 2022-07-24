import React from 'react';
import './index.css';

function HappyHour() {
    return (
        <div style={{padding: "45px 45px"}}>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <div>
                    <iframe width="1200" height="900"
                            src="https://telnyx-meet-demo.vercel.app/rooms/1535b4cf-7076-4aa8-aa5b-b74fa0265029?client_token=eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxueXhfY2xpZW50X3Rva2VuIiwiZXhwIjoxNjU4NjUyNzc0LCJncmFudHMiOlt7ImFjdGlvbnMiOlsiam9pbiJdLCJyZXNvdXJjZXMiOlsidGVsbnl4OnZpZGVvOnJvb21zOjE1MzViNGNmLTcwNzYtNGFhOC1hYTViLWI3NGZhMDI2NTAyOSJdLCJzdWJqZWN0cyI6WyJ0ZWxueXg6dXNlcnM6ZWFjODU3ZTQtNDgzYS00YTQ2LWFmYzItZDk4Yzg4ZjkwOTY3Il19XSwiZ3JhbnRzX3ZlcnNpb24iOiIxLjAuMCIsImlhdCI6MTY1ODY0OTE3NCwiaXNzIjoidGVsbnl4X2NsaWVudF90b2tlbiIsImp0aSI6ImZiZjgxNTYyLTUwZWUtNGE0OS04NTYzLTZiYTFhYjMyM2IyMiIsIm5iZiI6MTY1ODY0OTE3Mywic3ViIjoibnVsbCIsInR5cCI6ImFjY2VzcyJ9.yEjsk0ed_2fz9kospKWdPtJeJTRFR7lXlpD5EmwreShtK_4DfZ9t5W1b3J5oFKgk5ilWkFbaGAsj1kTlTTauBA&refresh_token=eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxueXhfY2xpZW50X3Rva2VuIiwiZXhwIjoxNjU4NzM1NTc0LCJncmFudHMiOlt7ImFjdGlvbnMiOlsiam9pbiJdLCJyZXNvdXJjZXMiOlsidGVsbnl4OnZpZGVvOnJvb21zOjE1MzViNGNmLTcwNzYtNGFhOC1hYTViLWI3NGZhMDI2NTAyOSJdLCJzdWJqZWN0cyI6WyJ0ZWxueXg6dXNlcnM6ZWFjODU3ZTQtNDgzYS00YTQ2LWFmYzItZDk4Yzg4ZjkwOTY3Il19XSwiZ3JhbnRzX3ZlcnNpb24iOiIxLjAuMCIsImlhdCI6MTY1ODY0OTE3NCwiaXNzIjoidGVsbnl4X2NsaWVudF90b2tlbiIsImp0aSI6IjgwMjZlYTU0LWE2ZDYtNDc1OS1iZTQwLWMyNGMyNjdlMmM3MiIsIm5iZiI6MTY1ODY0OTE3Mywic3ViIjoibnVsbCIsInR5cCI6InJlZnJlc2gifQ.bD3ckO_kmAHdXK1hUlcMu-NO-pGxI4fgBd7TKtpcJXo_mkM5G44MOIK0tlCaowMoZ08uO2zLa4_HIWnLRIgICQ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone"
                            allowFullScreen></iframe>
                </div>
                <div style={{paddingLeft: "20px", width: "10px"}}>

                    <img src={"games.png"} style={{width: "480px", height: "900px"}}/>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default HappyHour;
