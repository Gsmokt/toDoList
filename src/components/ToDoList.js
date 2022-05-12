import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../store/TaskReducer';
import { doneTask } from '../store/DelTaskReducer';
import Typography from "@mui/material/Typography";

import Tasks from './Tasks';

const ToDoList = () => {
    const activeTask = useSelector(state => state.toDoList);
    const stored = [...activeTask].sort((a,b) => a.finishDate - b.finishDate);
    const dispatch = useDispatch();
    const store = stored.map((task,i) => <Tasks key={task.id} task={task} index={i} doneTask={doneTask} removeTask={removeTask} dispatch={dispatch}/>);
    return (
        <>
        <div className='title' ><Typography sx={{fontFamily: 'Montserrat'}}  variant="h5">Tasks to be done</Typography></div>
        <div className='taskList' >
            {store}
        </div>
        </>
     
    );
};

export default ToDoList;