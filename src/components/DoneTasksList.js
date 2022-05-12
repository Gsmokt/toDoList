import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeDoneTask } from '../store/DelTaskReducer';
import DoneTasks from './DoneTasks';
import Typography from "@mui/material/Typography";

const DoneTasksList = () => {
    const state = useSelector(state => state.doneList);
    const dispatch = useDispatch();
    const store = state?.map((task,i) => <DoneTasks key={task.id} task={task} index={i} removeDoneTask={removeDoneTask} dispatch={dispatch}/>)
    return (
        <>
        <div className='title' ><Typography sx={{fontFamily: 'Montserrat'}} variant="h5">Tasks completed</Typography></div>
        <div className='taskList' >
            {store}
        </div>
        </>
    );
};

export default DoneTasksList;