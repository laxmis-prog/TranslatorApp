import React from 'react';
import { createRoot } from "react-dom/client"; {/*Connects your react app to the real DOM(html page) */}
import App from "./App";

const root = createRoot(document.getElementbyId("root"));
root.render(
    <React.StrictMode>
        <App />  {/*This renders the component, tells react to render App inside <div id="root"> */}
    </React.StrictMode>
);