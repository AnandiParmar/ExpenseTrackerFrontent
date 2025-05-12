import { api } from "@/store/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { delExpense } from "./expenseSlice";

export const addExpense = createAsyncThunk("addExpense", async (data) => {
  try {
    const res = await api.post("/expense/add-expense", data);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getAllExpense = createAsyncThunk("getAllExpense", async () => {
  try {
    const res = await api.get("/expense/all-expenses");
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("API error in getAllExpense:", error);
    throw error;
  }
});

export const deleteExpense = createAsyncThunk(
  "deleteExpense",
  async ({ id, dispatch }) => {
    console.log(id);
    try {
      const res = await api.delete(`/expense/delete-expense/${id}`);
      dispatch(delExpense(id));
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateExpense = createAsyncThunk(
  "/updateExpense",
  async ({ id, data }) => {
    try {
      const res = await api.put(`/expense/update-expense/${id}`, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
