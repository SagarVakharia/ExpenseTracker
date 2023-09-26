import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*  const [userInput, setUserInput] = useState({
         enteredTitle: '',
         enteredAmount: '',
         enteredDate: '',
     });
  */
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //Whenever ur state depends on previous state use any one of the methods mentioned below 
        //document.getElementById('').addEventListener('click', (event) =>  {} )
        //console.log(event.target.value); -->Inspect the page and check the "target value" this is what is changing when we add some title 
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });

        ------------------------------------------ OR-----------------------------------

        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value };
        }); */

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //document.getElementById('').addEventListener('click', (event) =>  {} )
        //console.log(event.target.value);//--> Inspect the page and check the "target value" this is what is changing when we add some title 
        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); */

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //document.getElementById('').addEventListener('click', (event) =>  {} )
        //console.log(event.target.value);//--> Inspect the page and check the "target value" this is what is changing when we add some title 
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); */

    };

    const submitHandler = (event) => {
        event.preventDefault(); // Built-in JS method to stop page to reload when form is submitted 

        const expenseData = { // created object for submitHandler
            title: enteredTitle, // Assigning Value in enteredTitle state to title. 
            amount: +enteredAmount, // These 3 are Key-value pair
            date: new Date(enteredDate),
        };
        /* console.log(expenseData);//Instead of this we will use props */
        props.onSaveExpenseData(expenseData);
        setEnteredTitle(''); // here we set the title to empty value after the form is getting submitted 
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'
                        value={enteredTitle}   /* this will set the internal value to property and we can set it to new value and we bind it to enteredTitle and with this when form is submitted it clears the form too. This is two way binding  */
                        onChange={titleChangeHandler} /> {/* Listening to inout provided by user in form usong titleChangeHandler event listener */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number'
                        value={enteredAmount}
                        min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'
                        value={enteredDate}
                        min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions" >
                <button type='submit'>Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default ExpenseForm;