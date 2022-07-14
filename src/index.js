import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <>
            <h1>Hello App.js</h1>;
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </ul>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
