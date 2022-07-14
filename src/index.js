import React from "react";
import ReactDOM from "react-dom/client";

const h1 = <h1>"hello world"</h1>;
const el = (
    <div>
        <div>
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </ul>
        </div>
        <p>lorem</p>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1, el);
