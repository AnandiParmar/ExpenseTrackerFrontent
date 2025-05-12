import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "@/components/common/Table";

function Income() {
  const navigate = useNavigate();
  const totalIncome = useSelector((state) => state.income.income);
  const columns = [
    { label: "Title", key: "income_type" },
    { label: "Amount", key: "income_amount" },
    { label: "Month", key: "month" },
  ];

  useEffect(() => {}, []);
  console.log(totalIncome);
  const totalAmount = totalIncome?.reduce(
    (acc, curr) => acc + Number(curr.income_amount),
    0
  );
  return (
    <>
      <div>
        <button
          className="text-white bg-gradient-to-br from-purple-900 to-purple-500 hover:bg-gradient-to-bl rounded focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm text-center mb-5 p-2 float-end mx-5"
          onClick={() => navigate("/add-income")}
        >
          Add Income
        </button>
      </div>
      <Table columns={columns} data={totalIncome} />
      <div className="ml-5 mt-4 font-bold text-black text-[15px]">
        Total: <span className="underline">{totalAmount}</span>
      </div>
    </>
  );
}

export default Income;
