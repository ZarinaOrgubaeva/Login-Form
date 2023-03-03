import { createSlice } from "@reduxjs/toolkit";

const initialState ={
token: '',
isAuthorized: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{

    }

})

export default authSlice