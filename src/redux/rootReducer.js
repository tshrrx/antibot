import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import captchaReducer from './slices/captchaSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    captcha: captchaReducer,
});

export default rootReducer;