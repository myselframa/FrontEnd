import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };

    props.onSaveExpense(newExpense);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Addd Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
