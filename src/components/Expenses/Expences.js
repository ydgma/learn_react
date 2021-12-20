import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  let expensesContent = <p>No expenses found.</p>;

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  if (filteredExpense.length > 0) {
    expensesContent =  filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="Expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onYearChange={filterChangeHandler}
        />
        {expensesContent} 
      </Card>
    </div>
  );
};

export default Expenses;
