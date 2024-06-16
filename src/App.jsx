import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState( 
    JSON.parse(localStorage.getItem("tasks")) ||
     [ 
    //   {
    //   id: 1,
    //   text: 'Doctor Appointment'
    //  },
    //  {
    //   id: 2,
    //   text: 'Go Shopping'
    //  }
    ] );

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    })

  // Add Task 
  const addTask = (task) => {
    const id = tasks.length + 1;

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {  
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit Task
  const editTask = (id, text) => {
    const editedTask = tasks.map((task) => {
      if (task.id === id) {
        task.task = text;
      }
      return task;
    })
    setTasks(editedTask);
    setEditingTask(false);
  }
  
  //Checked Task
  const changeCheckbox = (id, isChecked) => {
    const changedCheckbox = tasks.map((task) => {
      if (task.id === id) {
        task.isChecked = isChecked;
      }
      return task;
    });
    console.log(changedCheckbox);
    setTasks(changedCheckbox);
  };

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      m={'auto'}
      mt={'10'}
      w={"50%"}
      p={10}
    >
      <Header />
      <AddTask addTask={addTask}/>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          changeCheckbox={changeCheckbox}
        />
      ) : (
        "No Tasks for today"
      )}
    </Box>
  );
};

export default App;
