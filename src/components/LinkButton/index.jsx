import "./styles.css";

//COMPONENT that creates the actual button from the link
export default function LinkButton({ name, linkurl }) {
  return (
    <button
      className="linkbutton"
      onClick={() => window.open(linkurl, "_blank", "noreferrer")}
    >
      {name}
    </button>
  );
}
