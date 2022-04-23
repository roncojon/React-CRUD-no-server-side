import "./Card.css";

function Card(props) {
const classes = "card "+ props.className;

/* function idHandler (){
    if (props.onClicka) {
        props.onClicka(props.id);
} 
    } */
       
    return <div /* onClick={idHandler} */ className={classes}>{props.children}</div>;
}

export default Card;