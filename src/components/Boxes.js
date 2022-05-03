import "./Boxes.css";

function Box(props) {
  console.log(props);
  return <div className={props.className}>{props.label}</div>;
}

export default Box;
