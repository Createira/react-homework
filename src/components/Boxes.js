import "./Boxes.css";

function Box(props) {
  return <div className={props.className}>{props.label}</div>;
}

export default Box;
