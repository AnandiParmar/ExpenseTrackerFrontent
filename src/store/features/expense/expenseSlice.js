import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  expense: [],
  TotalExpense: 0,
};

export const expenseSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expense = [...state.expense, { ...action.payload, id: nanoid() }];
    },
    updateExpens: (state, action) => {
      const { id, ...changes } = action.payload;
      const index = state.expense.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.expense[index] = { ...state.expense[index], ...changes };
      }
    },
    delExpense: (state, action) => {
      let data = JSON.parse(JSON.stringify(state.expense));
      state.expense = data.filter((elem) => elem.id !== action.payload);
    },
    totalExpenses: (state) => {
      state.TotalExpense = state.expense.reduce((acc, curr) => {
        acc = Number(acc) + Number(curr.amount);
        return acc;
      }, 0);
    },
  },
});

export const { addExpense, delExpense, updateExpens, totalExpenses } =
  expenseSlice.actions;
export default expenseSlice.reducer;
