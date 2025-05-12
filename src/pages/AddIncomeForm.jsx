import React from "react";
import { addIncome } from "@/store/features/income/incomeAction";
import Form from "@/components/common/Form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddIncomeForm() {
  const [income, setIncome] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isFormSubmit) {
      dispatch(addIncome(income));
      navigate("/income");
    }
  }, [dispatch, income, isFormSubmit, navigate]);
  const formFields = [
    {
      name: "income_type",
      type: "text",
      id: "incometype",
      label: "Income Type",
      value: "",
    },
    {
      name: "income_amount",
      type: "number",
      id: "amount",
      label: "Income Amount",
    },
    {
      name: "month",
      type: "number",
      id: "month",
      label: "Add Month",
      min: 1,
      max: 12,
    },
    {
      type: "button",
      id: "btn",
      value: "Add Income",
    },
  ];
  return (
    <Form
      formFields={formFields}
      setFormData={setIncome}
      setIsFormSubmit={setIsFormSubmit}
      formData={income}
    />
  );
}

export default AddIncomeForm;
