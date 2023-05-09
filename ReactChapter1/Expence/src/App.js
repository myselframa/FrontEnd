import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
