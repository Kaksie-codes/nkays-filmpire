import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null   
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers:{
        setEmail:(state, action) =>{
            state.email = action.payload;
        }
    }
})

export const { setEmail } = signupSlice.actions;
export default signupSlice.reducer;