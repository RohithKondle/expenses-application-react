import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("No Filter");

  const selectHandler = (selectedDate) => {
    console.log(filteredYear);
    setFilteredYear(selectedDate);
  };

  let filteredExpenses;

  if (filteredYear !== "No Filter") {
    filteredExpenses = props.items.filter((expenseitem) => {
      return expenseitem.date.getFullYear() === parseInt(filteredYear);
    });
  } else {
    filteredExpenses = props.items;
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} selectHandler={selectHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
