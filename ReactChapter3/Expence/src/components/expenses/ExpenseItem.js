import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    console.log("clciked");
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>{" "}
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>changetitle</button>
    </Card>
  );
}

export default ExpenseItem;
