import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete }) {
  return (
    <div>
      {expenses.length === 0 ? <p>No expenses found.</p> : (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
