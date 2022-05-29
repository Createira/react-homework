// import Box from "./components/Boxes";
import Task from "./components/Task";

function App({ number, text, isFinished }) {
  // const boxesData = [
  //   {
  //     cssClass: "item-small",
  //     label: "Small Box",
  //   },
  //   {
  //     cssClass: "item-middle",
  //     label: "Medium Box",
  //   },
  //   {
  //     cssClass: "item-big",
  //     label: "Big Box",
  //   },
  // ];
  
  return (
    <div className="main">
      {/* <Box className={boxesData[0].cssClass} label={boxesData[0].label} />
      <Box className={boxesData[1].cssClass} label={boxesData[1].label} />
      <Box className={boxesData[2].cssClass} label={boxesData[2].label} /> */}
      <Task number={number} text={text} done={isFinished} />
    </div>
  );
}

export default App;
