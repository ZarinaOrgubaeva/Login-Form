import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../../api/authService";
export const Login = createAsyncThunk("users/login", async (signInData) => {
  try {
    const { data } = await loginRequest(signInData);
    localStorage.setItem("Auth", data.token);
  } catch (error) {
    alert("error", error);
  }
});
