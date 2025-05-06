import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  income: [],
  TotalIncome: 0,
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.income = [...state.income, { ...action.payload, id: nanoid() }];
    },
    totalIncome: (state) => {
      state.TotalIncome = state.income.reduce((acc, curr) => {
        acc = Number(acc) + Number(curr.amount);
        console.log(acc);
        return acc;
      }, 0);
    },
  },
});

export const { addIncome, totalIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
