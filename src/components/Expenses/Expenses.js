import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All years');
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

const fileteredExpenses = props.items.filter(expense=>{
  if (filteredYear != 'All years') {
    return expense.date.getFullYear().toString() === filteredYear
  }
  else{
    return expense
  }
  ;
});


  function deleteItemHandler(itemId) {
    props.onDelete(itemId);

  }

/*   const renderExpenses = ()=>{} */

  return (
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {/*   {props.items.map(expense =>
        <ExpenseItem
          onDel={deleteItemHandler}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id} />)} */}

      {fileteredExpenses.map(expense =>
        <ExpenseItem
          onDel={deleteItemHandler}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id} />)}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
 
  );
};

export default Expenses;