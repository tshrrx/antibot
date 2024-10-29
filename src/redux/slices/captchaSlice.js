import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mouseMovements: [], // Updated state property
    flag: false, // Ensure flag is initialized
    clicks: [], // New state property
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
        }
    },
});

export const { setFlag, addMouseMovement,addClick } = captchaSlice.actions;
export default captchaSlice.reducer;