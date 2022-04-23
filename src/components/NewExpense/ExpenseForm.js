import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm =(props) => {
    // Esta es una forma d actualizar el usestate 3 veces con los inputs
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

// Esta es una forma de actualizar el userstate 1 vez pero el llamado a setUserInput abajo es incorrecto a veces 
// pues puede q no de el estado anterior d userstate correctamente, ej si es lenta el serv o la conexion
/* const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
});

const titleChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredTitle: event.target.value,
    });
}
const amountChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
    });
}
const dateChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredDate: event.target.value,
    });
} */

// Esta es la forma mas correcta con un solo useState
 /* const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
});

const titleChangeHandler = (event) => {
    setUserInput((prevState)=>{
        return {...prevState, enteredTitle: event.target.value}
    });
}
const amountChangeHandler = (event) => {
    setUserInput((prevState)=>{
        return {...prevState, enteredAmount: event.target.value}
    });
}
const dateChangeHandler = (event) => {
    setUserInput((prevState)=>{
        return {...prevState, enteredDate: event.target.value}
    });
} */

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    /* console.log(expenseData); */
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
}

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type="text" 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Ammount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
        </form>
    )
};

export default ExpenseForm;