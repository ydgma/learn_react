import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (year) => {
   setFilteredYear(year);
  };

  return expenses.map((item) => {
    return (
      <div>
        <Card className="Expenses">
          <ExpensesFilter selectedYear={filteredYear} onYearChange={filterChangeHandler} />
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        </Card>
      </div>
    );
  });
};

export default Expenses;
