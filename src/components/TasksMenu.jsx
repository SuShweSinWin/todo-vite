import { Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const TasksMenu = ({ deleteTask, editTask, task }) => {
  return (
    <Menu >
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMoreVertical />}
        variant="outline"
      />
      <MenuList task={task}>
        <MenuItem icon={<FaEdit />} command="⌘T" onClick={() => editTask(task.id)} >
          Edit
        </MenuItem>
        <MenuItem icon={<FaTrash />} command="⌘N"  onClick={() => deleteTask(task.id)}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TasksMenu;
