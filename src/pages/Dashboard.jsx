import { getAllExpense } from "@/store/features/expense/expenseActions";
import { totalExpenses } from "@/store/features/expense/expenseSlice";
import { totalIncome } from "@/store/features/income/IncomeSlice";
import { getTotalIncome } from "@/store/features/income/incomeAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const TotalIncome = useSelector((state) => state.income.TotalIncome);
  const TotalExpenses = useSelector((state) => state.expense.TotalExpense);

  useEffect(() => {
    dispatch(getAllExpense()).then(() => {
      dispatch(totalExpenses());
    });
    dispatch(getTotalIncome()).then(() => {
      dispatch(totalIncome());
    });
  }, [dispatch]);
  return (
    <>
      <div className="flex justify-around">
        <div
          className="card  w-[350px] "
          style={{ fontFamily: "sans-serif", height: "250px" }}
        >
          <div className="bg-blue-500 h-[50%]  w-[100%] text-2xl  text-white text-center font-bold pt-5">
            Total Income
          </div>
          <div
            className="h-[30%] w-[100%]  text-center text-2xl font-bold text-gray-400 pt-5"
            style={{ fontFamily: "monospace" }}
          >
            {TotalIncome}₹
          </div>
        </div>
        <div className="card  w-[350px] " style={{ fontFamily: "sans-serif" }}>
          <div className="bg-red-400 h-[50%] w-[100%] text-2xl text-white text-center font-bold pt-5">
            Total Expenses
          </div>
          <div
            className="h-[30%] w-[100%]  text-center text-2xl font-bold text-gray-400 pt-5"
            style={{ fontFamily: "monospace" }}
          >
            {TotalExpenses}₹
          </div>
        </div>
        <div className="card w-[350px] " style={{ fontFamily: "sans-serif" }}>
          <div className="bg-green-500 h-[50%]  w-[100%] text-2xl text-white text-center font-bold pt-5">
            Balance
          </div>
          <div
            className="h-[30%] w-[100%]  text-center text-2xl font-bold text-gray-400 pt-5"
            style={{ fontFamily: "monospace" }}
          >
            {TotalIncome - TotalExpenses}₹
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
