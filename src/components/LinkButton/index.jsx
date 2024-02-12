import "./styles.css";

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
