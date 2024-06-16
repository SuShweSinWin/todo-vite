import { Box, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const ToDoHero = () => {
    const[time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, [])
  return (
    <Flex>
        <Box mr={4}>
        {time.toLocaleDateString()}
        </Box>
        <Box>
        {time.toLocaleTimeString()}
        </Box>
    </Flex>
  )
}

export default ToDoHero
