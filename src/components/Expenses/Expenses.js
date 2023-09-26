import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from "react";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {  // Or write this way --> const Expenses = (props) => 
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChagneHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.lists.filter((expense) => {
    return (expense.date.getFullYear().toString() === filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChagneHandler}
        /> {/* We made 2 props here selected and onChnageFIlter */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList  items={filteredExpenses}/> {/* Passing value to ExpensesList file*/} 
      </Card>
    </div>
  );
}

export default Expenses;