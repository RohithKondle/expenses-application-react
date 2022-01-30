import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found</h2>;
  }

  return (
    <div>
      {props.items.map((expense, index) => {
        return (
          <div key={index} className="expenses-list">
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.title}
            ></ExpenseItem>
          </div>
        );
      })} </div>
  );
};

export default ExpensesList;
