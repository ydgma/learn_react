import React, { useState } from "react";
import Expenses from "./components/Expenses/Expences";
import NewExpense from "./components/NewExpense/NewExpense";

//used initial expenses
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expneses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // the previosu state in the parameter of the method below of automatically called from react. 
    setExpenses(previousExpenses => {
      let exp =  [expense, ...previousExpenses];
      return exp.filter(ex => ex.date.getFullYear() !== 2020)
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expneses} />
    </div>
  );
};

export default App;
