import Task from "./Task";

const Tasks = ({ tasks, deleteTask, editTask, changeCheckbox }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          changeCheckbox={changeCheckbox}
        />
      ))}
    </>
  );
};

export default Tasks;
