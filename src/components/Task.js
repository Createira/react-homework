import "./Task.css";

function Task({ number, text, isFinished }) {
  const finishedStyle = isFinished
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  return (
    <div>
      <input type="checkbox" checked={isFinished} />
      <span className="task__number" style={finishedStyle}>
        {number}
      </span>
      <p className="task__text" style={finishedStyle}>
        {text}
      </p>
    </div>
  );
}

export default Task;
