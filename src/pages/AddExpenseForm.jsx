import Form from "@/components/common/Form";
import {
  addExpense,
  updateExpense,
} from "@/store/features/expense/expenseActions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function AddExpenseForm() {
  const { state } = useLocation();
  const [formData, setFormData] = useState(state?.data || {});
  const [isFormSubmit, setIsFormSubmit] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isFormSubmit) {
      if (state) {
        dispatch(updateExpense({ id: state?.id, data: formData }));
        setIsFormSubmit(false);
      } else {
        dispatch(addExpense(formData));
        setIsFormSubmit(false);
      }
      navigate("/all-expenses");
    }
  }, [isFormSubmit]);

  const formFields = [
    {
      name: "title",
      type: "text",
      label: "Add Expense",
      value: "",
      id: "expense",
      placeholder: "Enter Expense Name...",
    },
    {
      name: "amount",
      type: "number",
      label: "Amount",
      value: "",
      id: "amount",
      placeholder: "Enter Expense Amount...",
    },
    {
      name: "date",
      type: "date",
      label: "Date",
      value: "",
      id: "date",
      placeholder: "Enter Expense Date...",
    },
    {
      type: "button",
      value: `${state?.btnText || "ADD EXPENSE"} `,
      id: "btn",
    },
  ];
  return (
    <>
      <button
        className="mx-5 flex align-middle gap-2 font-bold "
        onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-arrow-left text-2xl "></i>GO Back
      </button>
      <Form
        formFields={formFields}
        setFormData={setFormData}
        setIsFormSubmit={setIsFormSubmit}
        formData={formData}
      ></Form>
    </>
  );
}

export default AddExpenseForm;
