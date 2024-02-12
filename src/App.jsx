import { useState } from "react";
import ButtonDisplay from "./components/ButtonDisplay";
import TodoBody from "./components/TodoBody";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./styles.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

export default function App() {
  const [todolist, updateTodolist] = useState([
    { done: false, what: "eat beef", id: 0, duedate: new Date("2024-10-10") },
    {
      done: true,
      what: "take every nap",
      id: 1,
      duedate: new Date("2024-10-10"),
    },
  ]);
  const [checkupdate, setCheckupdate] = useState(false);
  const [tododisplayrefresh, setTododisplayrefresh] = useState(false);

  //handles a box being checked
  const handleCheck = (idcheck) => {
    setCheckupdate(true);
    const newlist = todolist.map((itemcheck) => {
      if (itemcheck.id === idcheck) {
        return { ...itemcheck, done: !itemcheck.done };
      } else {
        return itemcheck;
      }
    });

    updateTodolist(newlist);
    setCheckupdate(false);
  };

  //handles adding the user's new item to the list
  function handleItemSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    updateTodolist([
      ...todolist,
      {
        done: false,
        what: formJson.newitem,
        id: Date.now(),
        duedate: new Date(formJson.newitemdate),
      },
    ]);
    console.log(todolist);
    let input1 = document.getElementById("todoinput");
    input1.value = "";
  }

  //handles sorting the lists
  function handleItemSort(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    let newlist;
    console.log(formJson);
    if (formJson.sortselect === "dateDue") {
      newlist = todolist.sort((a, b) => {
        return a.duedate.valueOf() - b.duedate.valueOf();
      });
    } else if (formJson.sortselect === "dateCreated") {
      newlist = todolist.sort((a, b) => {
        return a.id - b.id;
      });
    } else {
      newlist = todolist.sort((a, b) => {
        if (a.what < b.what) {
          return -1;
        }
        if (a.what > b.what) {
          return 1;
        }
        return 0;
      });
    }
    console.log(newlist);
    updateTodolist(newlist);
    setTododisplayrefresh(!tododisplayrefresh);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="todolist"
            element={
              <TodoBody
                handleItemSubmit={handleItemSubmit}
                handleItemSort={handleItemSort}
                tododisplayrefresh={tododisplayrefresh}
                todolist={todolist}
                handleCheck={handleCheck}
              />
            }
          />
          <Route path="links" element={<ButtonDisplay />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

/* todolist.map((item) => {
  if (item.done) {
    return item;
  } else {
    return;
  }
}) */
