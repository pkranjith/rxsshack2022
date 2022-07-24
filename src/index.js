import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Background from './background2.png';
import LandingPage from './LandingPage';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));

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
