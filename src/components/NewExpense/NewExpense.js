import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpenseButtonClicked, setAddExpenseButtonClicked] = useState(false);

  const newExpenseButtonClickedHandler = () => {
    setAddExpenseButtonClicked(true);
  };

  const cancelButtonClickedhandler = () => {
    console.log("cancel clicked");
    setAddExpenseButtonClicked(false);
  };

  return (
    <div className="new-expense">
      {addExpenseButtonClicked ? (
        <ExpenseForm
          onExpenseAdded={props.onExpenseAdded}
          cancelClicked={cancelButtonClickedhandler}
        />
      ) : (
          <button type="button" onClick={newExpenseButtonClickedHandler}>
            Add New Expense
          </button>
        
      )}
    </div>
  );
};

export default NewExpense;
