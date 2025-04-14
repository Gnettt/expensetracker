
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
     <div className='d-flex flex-row'>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      </div>
      <div className='d-flex flex-row'>
      <h2>Expense List</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  );
}

export default App;
