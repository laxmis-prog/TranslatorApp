import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementbyId("root"));
root.render(
    <React.StrictMode>
        <App />  {/*This renders the component */}
    </React.StrictMode>
);