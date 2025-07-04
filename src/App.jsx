import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState('All');

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = filteredYear === 'All'
    ? expenses
    : expenses.filter(e => e.date.getFullYear().toString() === filteredYear);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter selectedYear={filteredYear} onChangeYear={filterChangeHandler} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpenseHandler} />
    </div>
  );
}

export default App;
