import React from "react";
import ReactDOM from "react-dom/client";
import { APIProvider } from "@vis.gl/react-google-maps";
import { HelmetProvider } from "react-helmet-async";

import "rc-slider/assets/index.css";
import "./styles/index.scss";
import "./index.css";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY || ""}>
                 <App />
            </APIProvider>
        </HelmetProvider>
    </React.StrictMode>
);

reportWebVitals();
