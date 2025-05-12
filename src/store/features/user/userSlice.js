import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  getUserData,
  updateUserData,
} from "./userActions";
import { toast } from "react-toastify";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //registration handler

    builder.addCase(registerUser.pending, () => console.log("pending"));

    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action?.payload?.status == 400) {
        toast.error(action?.payload?.data?.message);
        return;
      }

      toast.success("Registerd Succesfully");
    });

    builder.addCase(registerUser.rejected, (state, action) =>
      toast.error(action)
    );

    //login Handler

    builder.addCase(loginUser.pending, () => console.log("pending"));

    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action?.payload?.status == 200) {
        const { accessToken, refreshToken, message } = action.payload.data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        toast.success(message);
      }
    });

    //Get User Data handler

    builder.addCase(getUserData.pending, () => console.log("pending"));

    builder.addCase(getUserData.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.user = action?.payload?.data;
    });

    //update userData Handler

    builder.addCase(updateUserData.pending, () => {
      console.log("pending");
    });

    builder.addCase(updateUserData.fulfilled, (state, action) => {
      console.log(action?.payload?.data?.user);
      state.user = action?.payload?.data?.user;
      console.log(state.user);
      toast.success(action?.payload?.data?.message);
    });
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
