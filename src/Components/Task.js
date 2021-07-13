import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask, completeTask } from "../redux/action";
import "../App.css";
export const Task = ({ task, delTask, updateTasks, completeTask }) => {
  const [edit, setEdit] = useState(false);
  const [taskupdate, setTaskUpdate] = useState(task.description);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTasks({ id: task.id, value: taskupdate });
    setEdit(!edit);
  };
  return (
    <div className="buttons" style={{ width: "800px", margin: "auto" }}>
      {edit ? (
        <div className="update">
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              className="form-control"
              value={taskupdate}
              onChange={(e) => {
                setTaskUpdate(e.target.value);
              }}
              required
            />
            <button className="btn btn-warning m-2" type="submit">
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="items">
          <div style={{ width: "300px" }}>
            <h3 className={task.done ? "done" : ""}>{task.description}</h3>
          </div>
          <div>
            <button
              className="btn btn-warning m-3"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </button>
            <button
              className="btn btn-success m-3"
              onClick={() => completeTask(task.id)}
            >
              {task.done ? "Cancel" : "Done"}
            </button>
            <button
              className="btn btn-danger m-3"
              onClick={() => delTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    delTask: (id) => dispatch(deleteTask(id)),
    updateTasks: ({ id, value }) => dispatch(updateTask({ id, value })),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};
export default connect(null, mapDispatchToProps)(Task);
