import { api } from "@/store/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addIncome = createAsyncThunk("/addIncome", async (data) => {
  try {
    const res = await api.post("/income/add-income", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getTotalIncome = createAsyncThunk("getTotalIncome", async () => {
  try {
    const res = await api.get("/income/total-income");
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("API error in getAllExpense:", error);
    throw error;
  }
});
