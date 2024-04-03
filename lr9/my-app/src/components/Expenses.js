import React, { useState } from 'react';
import AddExpenseForm from './AddExpenseForm';

const ExpenseDate = (props) => {
  // ... Код ExpenseDate остается прежним ...
};

// Удаляем компонент Card, если он больше нигде не используется

// Компонент ExpenseItem без Card
const ExpenseItem = (props) => {
  return (
    <div className="expense-item"> {/* Теперь применяем стили card напрямую к этому div */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};


const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (newExpense) => {
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <h2>Expenses</h2>
      <AddExpenseForm onAddExpense={addExpenseHandler} />
      {expenses.length === 0 && <p>No expenses found.</p>}
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={new Date(expense.date)}
          title={expense.description}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;

