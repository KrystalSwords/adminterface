import ToDoItem from "../ToDoItem";
import "./styles.css";

//COMPONENT for displaying the full to do list
export default function ToDoDisplay({ todolist, handleCheck }) {
  return (
    <ul className="itemlist">
      {todolist.map((item) => (
        <li key={item.id}>
          <ToDoItem listitem={item} handleCheck={handleCheck} />
        </li>
      ))}
    </ul>
  );
}
