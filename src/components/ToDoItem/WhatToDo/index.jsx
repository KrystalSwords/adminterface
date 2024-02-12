//COMPONENT that displays the
export default function WhatToDo({ what, isExpanded }) {
  if (what.length >= 25) {
    if (isExpanded) {
      return <p>{what}</p>;
    } else {
      return <p>{what.slice(0, 25)}...</p>;
    }
  } else {
    return <p>{what}</p>;
  }
}
