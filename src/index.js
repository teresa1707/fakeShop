import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return <h1>Hello App.js</h1>;
};
const AppList = () => {
    return (
        <div>
            {" "}
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </ul>
        </div>
    );
};

function App() {
    return (
        <>
            <Header />
            <AppList />
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
