import { axiosInstance } from "../config/axiosInstance"

 export const loginRequest = (signInData)=>{
    return axiosInstance.post("/login", signInData)
}