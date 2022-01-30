import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react/cjs/react.development";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const onExpenseAdded = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseAdded={onExpenseAdded}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
