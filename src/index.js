import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';
import Wellness from './Wellness';
import HappyHour from './HappyHour';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));

const showLandingPage = () => {
    if (window.location.pathname === "/") {
        return <LandingPage />;
    }
};

const showWellness = () => {
    if (window.location.pathname === "/wellness") {
        return <Wellness />;
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LandingPage/>
            </div>
        )
    };
}

root.render(
    <App/>, document.querySelector('#root')
);
