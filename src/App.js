import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";
import DoneTasksList from "./components/DoneTasksList";
import { AppWrapper, GlobalStyle, ListLeft, ListRight, Interface } from './styles/style';
import Typography from "@mui/material/Typography"; 

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <Interface>
          <AddTask/>  
        </Interface>
        <ListLeft>
          <ToDoList/>
        </ListLeft>
        <ListRight>
          <DoneTasksList/>
        </ListRight>
      </AppWrapper>
    </>
  );
}

export default App;
