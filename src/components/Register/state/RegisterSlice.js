import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerProfile } from "./service";

export const getRegisterAction = createAsyncThunk(
  "registerInfo/getbyId",
  async (registerDetail, { rejectWithValue }) => {
    try {
      const data = await registerProfile(registerDetail);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const RegisterSlice = createSlice({
  name: "register",
  initialState: {
    name: "",
    email: "",
    phoneNumber: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRegisterAction.pending, (state) => {
      return {
        name: "",
        email: "",
        phoneNumber: 0,
      };
    });

    builder.addCase(getRegisterAction.fulfilled, (state, { payload }) => {
      return {
        name: payload.name,
        email: payload.name,
        phoneNumber: payload.phoneNumber,
      };
    });

    builder.addCase(getRegisterAction.rejected, (state) => {
      return {
        name: "",
        email: "",
        phoneNumber: 0,
      };
    });
  },
});

export const {} = RegisterSlice.actions;
export default RegisterSlice.reducer;
