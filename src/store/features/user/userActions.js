import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/store/api";
import { toast } from "react-toastify";

const registerUser = createAsyncThunk("/registerUser", async (data) => {
  try {
    const res = await api.post("/auth/register", data);
    return res;
  } catch (error) {
    return error?.response;
  }
});

const loginUser = createAsyncThunk("/loginUser", async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const getUserData = createAsyncThunk("/getUserData", async () => {
  try {
    const res = await api.get("/user/userData");
    return res;
  } catch (error) {
    console.log(error);
  }
});

const updateUserData = createAsyncThunk(
  "/updateUserData",
  async ({ id, formData }) => {
    try {
      const res = await api.put(`/user/update-user-data/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res;
    } catch (error) {
      toast.error("Image Only");
      console.log(error);
    }
  }
);

export { registerUser, loginUser, getUserData, updateUserData };
