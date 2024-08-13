import React from "react";
import ReactDOM from "react-dom/client";
import { APIProvider } from "@vis.gl/react-google-maps";
import { HelmetProvider } from "react-helmet-async";

// CSS dosyalarını burada doğru bir sırada içe aktarın
import "rc-slider/assets/index.css";
import "./src/styles/index.scss"; // SCSS dosyalarınızı içe aktarın
import "./src/index.css"; // Tailwind CSS dosyasını içe aktarın
import "./src/fonts/line-awesome-1.3.0/css/line-awesome.css"; // İcon font dosyası

import App from "./src/App";
import reportWebVitals from "./src/reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY || ""}>
                <App />
            </APIProvider>
        </HelmetProvider>
    </React.StrictMode>
);

reportWebVitals();
