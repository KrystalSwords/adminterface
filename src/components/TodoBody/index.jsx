import AddItemToList from "../AddItemToList";
import ToDoDisplay from "../ToDoDisplay";
import ListSort from "../ListSort";

//COMPONENT that contains the entire todo list body
export default function TodoBody({
  handleItemSubmit,
  handleItemSort,
  tododisplayrefresh,
  todolist,
  handleCheck,
}) {
  return (
    <div>
      <span>
        <AddItemToList handleItemSubmit={handleItemSubmit} />
        <ListSort handleSortSubmit={handleItemSort} />
      </span>
      <div className="tododisplaycolumns" key={tododisplayrefresh}>
        {/*split the todo list into Done items and Not Done items*/}
        <ToDoDisplay
          todolist={todolist.filter((item) => {
            if (item.done === false) {
              return true;
            } else {
              return false;
            }
          })}
          handleCheck={handleCheck}
        />
        <ToDoDisplay
          todolist={todolist.filter((item) => {
            if (item.done === true) {
              return true;
            } else {
              return false;
            }
          })}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
}
