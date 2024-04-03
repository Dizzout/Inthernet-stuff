import React from 'react';
import './styles.css'; // Подключаем файл стилей
import ExpensesList from './components/Expenses'; // Изменили имя компонента, чтобы избежать конфликта имён

// Основной компонент приложения
function App() {
  // Данные о расходах
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>My Expenses template</h2>
      <ExpensesList expenses={expenses} /> {/* Обращаемся к компоненту ExpensesList */}
    </div>
  );
}

export default App;
