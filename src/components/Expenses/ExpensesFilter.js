import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropDownChangeHandler = (event) => { // Event listener function
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}> {/* Made 2 props here "value" and "onChanege" and provied "selected" as value which is a prop in Expenses.js */}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;