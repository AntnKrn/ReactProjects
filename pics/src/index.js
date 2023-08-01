import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import App from "./components/App"

/* ReactDOM.render(
    <App />, 
    document.querySelector('#root'),
) */


ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />);