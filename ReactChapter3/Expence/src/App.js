import React from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

function App() {
  // const para = document.createElement("p");
  // para.textContent = "This is Para";
  // document.getElementById("root").append("para");
  const expenses = [
    {
      title: "pen",
      amount: "100",
      date: new Date(2023, 5, 19),
    },
    {
      title: "car",
      amount: "5000",
      date: new Date(2023, 5, 1),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
