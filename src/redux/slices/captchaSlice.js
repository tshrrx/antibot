import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mouseMovements: [],
    clicks: [],
    mouseButtonEvents: [],
    flag: false,
    result: '', 
};

const captchaSlice = createSlice({
    name: 'captcha',
    initialState,
    reducers: {
        setFlag(state, action) {
            state.flag = action.payload;
        },
        addMouseMovement(state, action) {
            state.mouseMovements.push(action.payload);
        },
        addClick(state, action) {
            state.clicks.push(action.payload);
        },
        addMouseButtonEvent(state, action) {
            state.mouseButtonEvents.push(action.payload);
        },
        setResult(state, action) {
            state.result = action.payload;
        }
    },
});

export const { setFlag, addMouseMovement, addClick, addMouseButtonEvent,setResult } = captchaSlice.actions;
export default captchaSlice.reducer;