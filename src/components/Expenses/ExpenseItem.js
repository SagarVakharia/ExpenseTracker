import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";


const ExpenseItem = (props) => { //Or write this way --> function ExpenseItem(props) 
  /*  const [titlee, setTitle] = useState(props.titleee);//Array Destructing
   const clickHandler = () => { 
     setTitle("Updated!");
   } */

  return (
    //Creating our Dynamic Data
    <li>
      <Card className="expense-item">
        <ExpenseDate dateee={props.dateee} />
        <div className="expense-item__description">
          <h2>{props.titleee}</h2>
          <div className="expense-item__price">${props.amounttt}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
