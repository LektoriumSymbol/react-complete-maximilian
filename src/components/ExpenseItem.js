import './ExpenseItem.css' 

function ExpenseItem() {
  return (
    <div className="expense-item">
      <p>March 28th 2021</p>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
