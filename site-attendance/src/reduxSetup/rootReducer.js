import { combineReducers } from '@reduxjs/toolkit';
import loginDetails from '../slices/loginReducer';

const rootReducer = combineReducers({ 
    loginDetails
});

export default rootReducer;