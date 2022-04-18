import React from "react";

function Click() {
  const [sign, setCount] = React.useState("✔️");

  const checkboxChange = () => {
    if (sign === "✔️") {
      setCount("❌");
    } else {
      setCount("✔️");
    }
  };

  return (
    <div>
      <div>
        <button onClick={checkboxChange}>{sign}</button>
      </div>
    </div>
  );
}

export default Click;
