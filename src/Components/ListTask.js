import React from "react";
import Task from "./Task";
import { connect } from "react-redux";

// Listing tasks and applying filters
export const ListTask = ({ search, tasks }) => {
  let arrayFilter = [];
  if (search) {
    arrayFilter = tasks.filter((task) => task.done === true);
  }
  if (search === false) {
    arrayFilter = tasks.filter((task) => task.done === false);
  }
  if (search === "all") {
    arrayFilter = tasks;
  }
  return (
    <div>
      {tasks.length !== 0 ? (
        arrayFilter.map((task) => {
          return <Task key={task.id} task={task} />;
        })
      ) : (
        <h3 style={{ textAlign: "center" }}> Nothing to do !</h3>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.Taskreducer.todo,
    search: state.Taskreducer.search,
  };
};

export default connect(mapStateToProps)(ListTask);
