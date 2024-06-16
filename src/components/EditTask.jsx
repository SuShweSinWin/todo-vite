import { Box, Input } from "@chakra-ui/react";

const EditTask = ( { setIsEditing, task, editTask } ) => {
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
        editTask(task.id, text)
    }
  }
  return (
    <Box>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {handleKeydown}}
      />
    </Box>
  );
};

export default EditTask;
