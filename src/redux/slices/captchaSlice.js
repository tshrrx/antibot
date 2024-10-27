import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    flag:false,
};

const captchaSlice = createSlice({
    name: 'captcha',
    initialState,
    reducers: {
        setFlag(state,value){
            state.flag=value.payload;
        },
    },
});

export const {setFlag} = captchaSlice.actions;
export default captchaSlice.reducer;