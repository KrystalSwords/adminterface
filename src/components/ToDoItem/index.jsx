import "./styles.css";
import WhatToDo from "./WhatToDo";
import { useState } from "react";

//COMPONENT for individual items on the to do list
export default function ToDoItem({ listitem, handleCheck }) {
  let checkClass, checkboxClass;
  const [isExpanded, setIsExpanded] = useState(false);
  if (listitem.done) {
    checkClass = "listitemchecked";
    checkboxClass = "checked";
  } else {
    checkClass = "listitemunchecked";
    checkboxClass = "unchecked";
  }

  function onTextClick() {
    event.preventDefault();
    setIsExpanded(!isExpanded);
    return;
  }

  return (
    <div className={checkClass}>
      <label>
        <input
          type="checkbox"
          className={checkboxClass}
          checked={listitem.done}
          onChange={() => handleCheck(listitem.id)}
        />
        <div className="what" onClick={onTextClick}>
          <WhatToDo what={listitem.what} isExpanded={isExpanded} />
        </div>
        <div className="duedate">
          {dateCompare(listitem.duedate, new Date(Date.now()))}
        </div>
      </label>
    </div>
  );
}

//function, takes in two dates and returns the due string based on how far away they are
function dateCompare(date1, date2) {
  let dueConstruct = "Due in ";
  const datecompare = new Date(date1.getTime() - date2.getTime());
  //first check year
  if (datecompare.getFullYear() > 1970) {
    dueConstruct = dueConstruct + (datecompare.getFullYear() - 1970) + " Year";
    if (datecompare.getFullYear() > 1) {
      dueConstruct = dueConstruct + "s";
    }
  } else if (
    //weird tomorrow case bc the subtraction makes tomorrow 11/31/69
    datecompare.getFullYear() === 1969 &&
    datecompare.getMonth() === 11 &&
    datecompare.getDate() === 31
  ) {
    dueConstruct = "Due Tomorrow";
  } else if (
    //today case, same as above
    datecompare.getFullYear() === 1969 &&
    datecompare.getMonth() === 11 &&
    datecompare.getDate() === 30
  ) {
    dueConstruct = "Due Today";
  } else if (datecompare.getFullYear() < 1970) {
    //if pre 1970 and both above fail, is past due
    dueConstruct = "Past Due";
  } else if (datecompare.getMonth() > 0) {
    //next check month
    dueConstruct = dueConstruct + datecompare.getMonth() + " Month";
    if (datecompare.getMonth() > 1) {
      dueConstruct = dueConstruct + "s";
    }
  } else if (datecompare.getDate() > 0) {
    //finally check date, then do a 7 check for week
    if (datecompare.getDate() > 7) {
      dueConstruct =
        dueConstruct + Math.floor(datecompare.getDate() / 7) + " Week";
      if (Math.floor(datecompare.getDate() / 7) > 1) {
        dueConstruct = dueConstruct + "s";
      }
    } else {
      dueConstruct = dueConstruct + (datecompare.getDate() + 1) + " Day";
      if (datecompare.getDate() > 0) {
        dueConstruct = dueConstruct + "s";
      }
    }
  } else {
    dueConstruct = "you goofed somewhere";
  }
  return dueConstruct;
}
