import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mouseMovements: [],
    clicks: [],
    mouseButtonEvents: [],
    flag: false,
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
    },
});

export const { setFlag, addMouseMovement, addClick, addMouseButtonEvent } = captchaSlice.actions;
export default captchaSlice.reducer;