import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/TaskReducer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const AddTask = () => {
    const state = useSelector(state => state.toDoList);
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const handleChange = () => {
        dispatch(addTask({id: state.length +1, task, priority,addDate: new Date().getTime(),finishDate: new Date(date).getTime()}))
        setTask('');
        setPriority(false);
    }
    return (
        <>
           <div className='appBar' >
                <div style={{minWidth: 400}} ><TextField fullWidth inputProps={{style: {fontSize: '23px'}}} id="standard-basic" label="Add task..." variant="standard" value={task} onChange={(e) => setTask(e.target.value)} />  </div> 
                <div><Checkbox onChange={(e) => setPriority(e.target.checked)} checked={priority} />Priority</div>
                <TextField min={date} value={date} onChange={(e) => setDate(e.target.value)} type='date'/>
           </div>
           <div className='submitBtn' ><Button onClick={handleChange} variant="contained">Submit</Button></div>
        </>
    );
};

export default AddTask;

