import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Text from "./Text";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={"title"} >
      <Text text="Regular Text" textColor="black" fontSize={20} textDecorationLine={false} />
      <Text text="Huge header" textColor="black" fontSize={45} textDecorationLine={false} />
      <Text text="Danger notification" textColor="red" fontSize={18} textDecorationLine={false} />
      <Text text="Underlined text" textColor="black" fontSize={16} textDecorationLine={true} />
    </div>
  </React.StrictMode>
);
