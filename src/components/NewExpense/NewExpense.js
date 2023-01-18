import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const clickCancelButtonHandler = () => {
    setIsEditing(false);
  };

  const clickAddNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === true ? (
        <ExpenseForm
          onClickCancelButtonHandler={clickCancelButtonHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={clickAddNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
