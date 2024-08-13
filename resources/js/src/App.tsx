import React from "react";
import MyRouter from './routers/index';


function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <div className="bg-red-500 p-4 text-white">
            Bu div Tailwind sınıfları ile stillendi.
        </div>
        <div
            className="test-normal-css"
            style={{ backgroundColor: "blue", color: "white", padding: "20px" }}
        >
            Bu div normal CSS ile mavi arka plan ve beyaz metin stili uygulanmış.
        </div>


        <MyRouter />
    </div>
  );
}

export default App;
