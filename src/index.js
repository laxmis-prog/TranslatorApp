import React from 'react';
import { createRoot } from "react-dom/client"; {/*Connects your react app to the real DOM(html page) */}
import App from "./App.jsx";
import ReactDom from "react-dom";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />  {/*This renders the component, tells react to render App inside <div id="root"> */}
    </React.StrictMode>
);