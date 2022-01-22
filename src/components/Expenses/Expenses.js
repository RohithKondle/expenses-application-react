import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((expense) => {
        return (
          <div>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.title}
            ></ExpenseItem>
          </div>
        );
      })}
    </Card>
  );
}

export default Expenses;
