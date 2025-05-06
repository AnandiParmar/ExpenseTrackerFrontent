import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      name: "Anandi",
      email: "olixlab@gmail.com",
      phone: "1234567891",
      password: "123456",
      "confirm-password": "123456",
      id: "__WxGPig6aHux7uAJ_XDn",
    },
  ],
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, { ...action.payload, id: nanoid() }];
      state.error = false;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
