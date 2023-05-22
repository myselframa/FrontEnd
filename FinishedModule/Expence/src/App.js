import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "pen",
    amount: "100",
    date: new Date(2022, 5, 19),
  },
  {
    id: "e2",
    title: "car",
    amount: "5000",
    date: new Date(2023, 5, 1),
  },
  {
    id: "e3",
    title: "TV",
    amount: "10000",
    date: new Date(2021, 5, 19),
  },
  {
    id: "e4",
    title: "MyBook",
    amount: "50",
    date: new Date(2022, 5, 1),
  },
];
function App() {
  // const para = document.createElement("p");
  // para.textContent = "This is Para";
  // document.getElementById("root").append("para");
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseHandler = (expenseData) => {
    return setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
