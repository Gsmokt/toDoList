import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

const Store = createSlice({
    name:'reducer',
    initialState,
    reducers: {
        addTask: (state, action) => {
          state.push(action.payload);
          localStorage.setItem('tasks', JSON.stringify(state));
        },
        removeTask: (state, action) => {
          localStorage.setItem('tasks', JSON.stringify(state.filter(e => e.id !== action.payload)));
          return state.filter(e => e.id !== action.payload);
        }
    }
})

export const {addTask, removeTask} = Store.actions;
export default Store.reducer;