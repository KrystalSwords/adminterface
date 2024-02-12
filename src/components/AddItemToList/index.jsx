import "./styles.css";

//COMPONENT that takes in a new todo item and adds it to the todo list
export default function AddItemToList({ handleItemSubmit }) {
  return (
    <form onSubmit={handleItemSubmit}>
      <label>
        Enter new todo item:
        <input
          className="newitemtext"
          type="text"
          name="newitem"
          id="todoinput"
          required
        />
        <input type="date" name="newitemdate" id="dateinput" required />
      </label>
      <button type="submit">Add to list</button>
    </form>
  );
}
