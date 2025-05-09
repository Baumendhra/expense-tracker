import './ExpenseItem.css';

function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <div>{expense.title}</div>
      <div>${expense.amount}</div>
      <div>{expense.date.toLocaleDateString()}</div>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
