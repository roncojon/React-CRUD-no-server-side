/* import React, { useState } from 'react'; */
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';


function ExpenseItem(props) {
   /*  const [title, setTitle] = useState(props.title);
   
    const clickHandler =()=>{
        setTitle("Updated!");
        console.log(title);
    }; */
    const deleteHandler =() =>{
        props.onDel(props.id);
        console.log(`From ExpenseItem removing item with ID: ${props.id}`)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div /* onClick={deleteHandler} */ className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button  onClick={clickHandler}>Change Title</button> */}
            <div onClick={deleteHandler} className="expense-item__price" style={{backgroundColor: "#b91c50", marginLeft: "0.4rem",cursor: "pointer", width:"180px"}}>Delete Item</div>
        </Card>
    );
}

export default ExpenseItem;