import './ExpenseItem.css' 

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <p>{props.date.toISOString()}</p>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
