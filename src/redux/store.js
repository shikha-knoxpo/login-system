import {configureStore} from '@reduxjs/toolkit';
import LoginSlice from '../components/Login/state/LoginSlice';

export default configureStore({reducer:{
    loginDetail:LoginSlice
}})
