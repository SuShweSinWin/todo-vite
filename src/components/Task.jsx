import { Box, Text, Checkbox } from "@chakra-ui/react";
import TasksMenu from "./TasksMenu";
import { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ task, deleteTask, editTask, changeCheckbox }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box
      bg={"#393e46"}
      borderRadius={"8px"}
      w={"50%"}
      p={3}
      m={2}
      display={"flex"}
      justifyContent={"space-between"}
      sx={{
        "&:hover": {
          bgColor: "#38598b",
          transition: "transform 0.8s ease",
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Checkbox
          mr={2}
          value={isChecked}
          onChange={(e) => setIsChecked(e.currentTarget.checked)}
        ></Checkbox>
        { isEditing === task.id ? (
          <EditTask task={task} setIsEditing={setIsEditing} editTask={editTask}/>
        ) : 
        <Text fontWeight={"bold"} color={"#ffff"}>
          {task.text}
        </Text>
        }
      </Box>
      <TasksMenu deleteTask={deleteTask} editTask={editTask} task={task} />
    </Box>
  );
};

export default Task;
