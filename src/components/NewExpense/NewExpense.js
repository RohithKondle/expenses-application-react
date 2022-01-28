import react from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    return(
        <div className="new-expense">
            <ExpenseForm onExpenseAdded = {props.onExpenseAdded}/>
        </div>
    );
}

export default NewExpense;