import Task from "./Task";

const Tasks = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </>
  );
};

export default Tasks;
