import "./App.css";

function Text({ text, textColor, fontSize, textDecorationLine }) {
  const styles = {
    color: textColor, 
    fontSize: fontSize + "px",
    textDecorationLine,
  };

  if(styles.textDecorationLine === true) {
    styles.textDecorationLine = "underline";
  }

  return (
    <div className={"title"} style={styles}>
      {text}
    </div>
  );
}

export default Text;
