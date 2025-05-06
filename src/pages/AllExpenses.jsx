import React from "react";
import Table from "@/components/common/Table";
import { useSelector, useDispatch } from "react-redux";
import { delExpense } from "@/store/features/expense/expenseSlice";
import { useNavigate } from "react-router-dom";

function AllExpenses() {
  const allexpense = useSelector((state) => state.expense.expense);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDelete(id) {
    dispatch(delExpense(id));
  }

  function handleEdit(data) {
    navigate("/add-expense", {
      state: { data, btnText: "EDIT EXPENSE" },
    });
  }

  const columns = [
    { label: "Title", key: "expense" },
    { label: "Amount", key: "amount" },
    { label: "Date", key: "date" },
    {
      label: "Actions",
      render: (row) => (
        <div>
          <button
            onClick={() => handleEdit(row)}
            className="py-2 text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="px-2 py-2 text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const totalAmount = allexpense.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  return (
    <>
      <div>
        <button
          className="text-white bg-gradient-to-br from-purple-900 to-purple-500 hover:bg-gradient-to-bl rounded focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm text-center mb-5 p-2 float-end mx-5"
          onClick={() => navigate("/add-expense")}
        >
          Add Expense
        </button>
      </div>
      <Table columns={columns} data={allexpense} />
      <div className="ml-5 mt-4 font-bold text-black text-[15px]">
        Total: <span className="underline">{totalAmount}</span>
      </div>
    </>
  );
}

export default AllExpenses;
