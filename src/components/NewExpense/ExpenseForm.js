import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // three state methoid
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // using single state
  // const [userInpuit, setUserInput ] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInpuit,
    //   enteredTitle: event.target.value,
    // // })
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredAmount: event.target.value };
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredDate: event.target.value };
    // });
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // dont reload page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
