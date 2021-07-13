import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, doneTask, undonetask, refreshList } from "../redux/action";

export const Addtask = (props) => {
  const [newTask, setNewTask] = useState("");
  const [radiocheck, setRadioCheck] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.random(),
      description: newTask,
      done: false,
    });
    setNewTask("");
  };
  return (
    <>
      <div className="form-item">
        <form onSubmit={addNewTask}>
          <input
            type="text"
            value={newTask}
            placeholder="Add a Todo"
            className=" col form-control"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className=" btn btn-dark mx-3" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="task-filters">
        <label>
          <input
            type="radio"
            value="Tasklist"
            checked={radiocheck === "Tasklist"}
            onChange={(e) => setRadioCheck(e.target.value)}
            onClick={() => props.refreshList()}
          />
          Tasks List
        </label>
        <label>
          <input
            type="radio"
            value="done"
            checked={radiocheck === "done"}
            onChange={(e) => setRadioCheck(e.target.value)}
            onClick={() => props.doneTask()}
          />
          Tasks Done
        </label>
        <label>
          <input
            type="radio"
            value="undone"
            checked={radiocheck === "undone"}
            onChange={(e) => setRadioCheck(e.target.value)}
            onClick={() => props.nodoneTask()}
          />
          Tasks Undone
        </label>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    doneTask: () => dispatch(doneTask()),
    nodoneTask: () => dispatch(undonetask()),
    refreshList: () => dispatch(refreshList()),
  };
};
export default connect(null, mapDispatchToProps)(Addtask);
