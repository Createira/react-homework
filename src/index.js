import React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
// import App from "./App";
import Task from "./components/Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Task number={1.} text="Create immaculate final project on React" isFinished={false}/>
    <Task number={2.} text="Find a new job" isFinished={false}/>
    <Task number={3.} text="Reach the Upper Intermediate level in English" isFinished={true}/>
    <Task number={4.} text="Work and earn 10,000$" isFinished={false}/>
    <Task number={5.} text="Buy a BMW" isFinished={false}/>
  </React.StrictMode>
);
