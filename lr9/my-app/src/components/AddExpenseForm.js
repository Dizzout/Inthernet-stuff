import React from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Перевірка на пусті поля
    if (!description.trim() || !amount.trim()) return;
    
    // Створення об'єкта нової витрати
    const newExpense = {
      description,
      amount: parseFloat(amount)
    };

    // Виклик функції onAddExpense для додавання нової витрати
    onAddExpense(newExpense);

    // Очистка полів після додавання витрати
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Опис"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="number"
        placeholder="Сума"
        value={amount}
        onChange={handleAmountChange}
      />
      <button type="submit">Додати витрату</button>
    </form>
  );
}

export default AddExpenseForm;
