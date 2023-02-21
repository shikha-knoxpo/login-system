import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginProfile } from "./service";

export const getLoginAction = createAsyncThunk(
  "loginInfo/getbyId",
  async (loginDetail, { rejectWithValue }) => {
    try {
      const data = await loginProfile(loginDetail);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getLoginAction.pending,(state)=>{
        
        return({
            // username:"anisha9242@gmail.com",
            // password:"GXWkq6cf"
            username:"",
            password:""
        })
    });

    builder.addCase(getLoginAction.fulfilled,(state,{payload})=>{
        
        return({
            username:"anisha9242@gmail.com",
            password:"GXWkq6cf"
            
        })
    });

    builder.addCase(getLoginAction.rejected,(state)=>{
        
        return({
            username:"",
            password:""
        })
    });

  }
    
  
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;
