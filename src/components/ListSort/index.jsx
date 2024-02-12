//COMPONENT that selects a type of sort to sort the todolist by
export default function ListSort({ handleSortSubmit }) {
  return (
    <form onSubmit={handleSortSubmit}>
      <select name="sortselect">
        <option value="dateCreated">Date Created</option>
        <option value="dateDue">Date Due</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
      <button type="submit">Sort</button>
    </form>
  );
}
