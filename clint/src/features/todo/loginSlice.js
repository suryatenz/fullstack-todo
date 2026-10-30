import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    login:false,
    logout:true,
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        loginChange:(state)=>{
            state.login = !state.login;
        },
        logoutChange:(state)=>{
            state.logout=!state.logout;
        }
    }
})

export const {loginChange,logoutChange} = loginSlice.actions;
export default loginSlice.reducer;