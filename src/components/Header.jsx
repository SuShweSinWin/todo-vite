import { Box, Text } from "@chakra-ui/react"
import ToDoHero from "./ToDoHero"

const Header = () => {
  return (
    <Box mb={5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Text fontSize={'xxx-large'} fontWeight={'bold'} mr={70}>ToDo List</Text>
      <ToDoHero />
    </Box>
  )
}

export default Header
