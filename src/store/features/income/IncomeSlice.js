import { createSlice } from "@reduxjs/toolkit";
import { addIncome, getTotalIncome } from "./incomeAction";
import { toast } from "react-toastify";

const initialState = {
  income: [],
  TotalIncome: 0,
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    totalIncome: (state) => {
      state.TotalIncome = state.income.reduce((acc, curr) => {
        acc = Number(acc) + Number(curr.income_amount);
        console.log(acc);
        return acc;
      }, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addIncome.pending, () => console.log("pending"));

    builder.addCase(addIncome.fulfilled, (state, action) => {
      toast.success(action?.payload?.message);
    });

    //all - income

    builder.addCase(getTotalIncome.pending, () => console.log("pending"));

    builder.addCase(getTotalIncome.fulfilled, (state, action) => {
      console.log("get Total Income reducer");
      state.income = action?.payload;
    });
  },
});

export const { totalIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
