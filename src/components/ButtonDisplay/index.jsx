import ButtonCard from "../ButtonCard/";
import "./styles.css";
import { listoflinks } from "../../listoflinks.js";

//COMPONENT that takes in the list of links to display and displays the array of buttons
export default function ButtonDisplay() {
  return (
    <div className="display">
      {listoflinks.map((item) => (
        <ButtonCard name={item.name} linkurl={item.link} info={item.info} />
      ))}
    </div>
  );
}
