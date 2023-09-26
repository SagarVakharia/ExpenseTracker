import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => { //enteredExpenseData is our parameter
        const expenseData = { //created new object
            ...enteredExpenseData, //fetching all key-value pairs from ExpenseForm.js
            id: Math.random().toString() 
        };
        // Here we also called parent function i.e is in App.js using the prop onAddExpense and pass data to it i.e. expenData
        props.onAddExpense(expenseData); // onAddexpense is our custom prop through which we call a function and pass the expenseData values to that function by doing this we "Lifting that data/state up"
        setIsEditing(false); //To hide the form when submitted
    };
    
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false); 
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> } {/* onSaveExpendeData is custom props we create and it is pointing at the function ExpenseDataHandler*/}
        </div>
    );
};

export default NewExpense;