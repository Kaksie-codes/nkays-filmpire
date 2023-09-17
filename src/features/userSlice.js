import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userName: '',
    searchedMovies: null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUserName:(state, action) =>{
            state.userName = action.payload;
        },
        setSearchedMovies:(state, action) => {
            state.searchedMovies = action.payload;
        },
        login: (state, action) => {
            state.user = action.payload;
        },
        logout:(state) => {
            state.user = null;
        }
    }
})


export const { login, logout, setUserName, setSearchedMovies} = userSlice.actions;
export default userSlice.reducer;