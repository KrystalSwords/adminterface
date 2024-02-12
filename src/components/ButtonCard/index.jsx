import LinkButton from "../LinkButton";
import "./styles.css";

//COMPONENT that creates the card surrounding a button
export default function ButtonCard({ name, linkurl, info }) {
  return (
    <div className="card">
      <LinkButton name={name} linkurl={linkurl} />
      <p className="cardinfo">{info}</p>
    </div>
  );
}
