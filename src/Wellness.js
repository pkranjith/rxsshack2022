import React from 'react';
import './index.css'

function Wellness() {
    const handleClick = () => {
        window.open("https://telnyx-meet-demo.vercel.app/rooms/1535b4cf-7076-4aa8-aa5b-b74fa0265029?client_token=eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxueXhfY2xpZW50X3Rva2VuIiwiZXhwIjoxNjU4NjUyNzc0LCJncmFudHMiOlt7ImFjdGlvbnMiOlsiam9pbiJdLCJyZXNvdXJjZXMiOlsidGVsbnl4OnZpZGVvOnJvb21zOjE1MzViNGNmLTcwNzYtNGFhOC1hYTViLWI3NGZhMDI2NTAyOSJdLCJzdWJqZWN0cyI6WyJ0ZWxueXg6dXNlcnM6ZWFjODU3ZTQtNDgzYS00YTQ2LWFmYzItZDk4Yzg4ZjkwOTY3Il19XSwiZ3JhbnRzX3ZlcnNpb24iOiIxLjAuMCIsImlhdCI6MTY1ODY0OTE3NCwiaXNzIjoidGVsbnl4X2NsaWVudF90b2tlbiIsImp0aSI6ImZiZjgxNTYyLTUwZWUtNGE0OS04NTYzLTZiYTFhYjMyM2IyMiIsIm5iZiI6MTY1ODY0OTE3Mywic3ViIjoibnVsbCIsInR5cCI6ImFjY2VzcyJ9.yEjsk0ed_2fz9kospKWdPtJeJTRFR7lXlpD5EmwreShtK_4DfZ9t5W1b3J5oFKgk5ilWkFbaGAsj1kTlTTauBA&refresh_token=eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxueXhfY2xpZW50X3Rva2VuIiwiZXhwIjoxNjU4NzM1NTc0LCJncmFudHMiOlt7ImFjdGlvbnMiOlsiam9pbiJdLCJyZXNvdXJjZXMiOlsidGVsbnl4OnZpZGVvOnJvb21zOjE1MzViNGNmLTcwNzYtNGFhOC1hYTViLWI3NGZhMDI2NTAyOSJdLCJzdWJqZWN0cyI6WyJ0ZWxueXg6dXNlcnM6ZWFjODU3ZTQtNDgzYS00YTQ2LWFmYzItZDk4Yzg4ZjkwOTY3Il19XSwiZ3JhbnRzX3ZlcnNpb24iOiIxLjAuMCIsImlhdCI6MTY1ODY0OTE3NCwiaXNzIjoidGVsbnl4X2NsaWVudF90b2tlbiIsImp0aSI6IjgwMjZlYTU0LWE2ZDYtNDc1OS1iZTQwLWMyNGMyNjdlMmM3MiIsIm5iZiI6MTY1ODY0OTE3Mywic3ViIjoibnVsbCIsInR5cCI6InJlZnJlc2gifQ.bD3ckO_kmAHdXK1hUlcMu-NO-pGxI4fgBd7TKtpcJXo_mkM5G44MOIK0tlCaowMoZ08uO2zLa4_HIWnLRIgICQ");
    };
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
                    <iframe width="430" height="300" src="https://www.youtube.com/embed/rYQXIaUWBVg"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <div style={{paddingTop: "20px"}}>
                        <iframe width="430" height="300" src="https://www.youtube.com/embed/6fnLKyRJsrs"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>

                </div>
                <div>

                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>


                <button style={{
                    padding: "10px 42px",
                    backgroundColor: "#D83D2E",
                    color: "white",
                    border: "none",
                    fontSize: "16px",
                    borderRadius: "5px",
                    margin: "30px 0",
                }} onClick={handleClick}>
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
export default Wellness;
