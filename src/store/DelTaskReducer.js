import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage.getItem('doneTasks') ? JSON.parse(localStorage.getItem('doneTasks')) : [];

const Store = createSlice({
    name:'reducerTwo',
    initialState,
    reducers: {
        doneTask: (state, action) => {
          state.push(action.payload);
          localStorage.setItem('doneTasks', JSON.stringify(state));
        },
        removeDoneTask: (state, action) => {
          localStorage.setItem('doneTasks', JSON.stringify(state.filter(e => e.id !== action.payload)));
          return state.filter(e => e.id !== action.payload);
        }
    }
})

export const {doneTask, removeDoneTask} = Store.actions;
export default Store.reducer;