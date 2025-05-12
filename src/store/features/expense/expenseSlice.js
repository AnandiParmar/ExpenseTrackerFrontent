import { createSlice } from "@reduxjs/toolkit";
import { addExpense, deleteExpense, getAllExpense } from "./expenseActions";
import { toast } from "react-toastify";

const initialState = {
  expense: [],
  TotalExpense: 0,
};

export const expenseSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    delExpense: (state, action) => {
      let data = JSON.parse(JSON.stringify(state.expense));
      state.expense = data.filter((elem) => elem._id != action.payload);
    },
    totalExpenses: (state) => {
      state.TotalExpense = state?.expense?.reduce((acc, curr) => {
        acc = Number(acc) + Number(curr.amount);
        return acc;
      }, 0);
    },
  },
  extraReducers: (builder) => {
    //add-expense
    builder.addCase(addExpense.pending, () => console.log("pending"));

    builder.addCase(addExpense.fulfilled, (state, action) => {
      console.log(state, action);
      toast.success("Expense Added Succesfully");
    });

    //get all expense

    builder.addCase(getAllExpense.pending, () => console.log("pending"));

    builder.addCase(getAllExpense.fulfilled, (state, action) => {
      state.expense = action.payload;
    });

    builder.addCase(getAllExpense.rejected, (state, action) => {
      console.log(action);
    });

    //delete expense

    builder.addCase(deleteExpense.pending, () => console.log("pending"));

    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      toast.success(action?.payload?.message);
    });
  },
});

export const { delExpense, totalExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
