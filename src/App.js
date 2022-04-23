import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import "./App.css"
import NewExpense from './components/NewExpense/NewExpense';


/* const App = () => {} */
function App() {
 
  const expensesTemp = [
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      id: 'e1',
    },
    {  title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),id: 'e2', },
    {
      
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      id: 'e3',
    },
    {
      
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      id: 'e4',
    },
  ];

  const [expenses, setExpenses] = React.useState(expensesTemp);
 
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    setExpenses (prevState=>[expense, ...prevState]);
  }

  const deleteItem =(itemId)=>{
    setExpenses (prevState=>(
      prevState.filter((el)=>{return (el.id !== itemId)})
    ));
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} onDelete={deleteItem}></Expenses>
    </div>
  );
}

export default App;
