import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !category || !amount || !date) return;

    const newExpense = {
      id: crypto.randomUUID(),
      description,
      category,
      amount: parseFloat(amount),
      date,
    };

    onAddExpense(newExpense);
    setExpense('');
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
  <div className="mb-2">
    <input
      className="form-control"
      placeholder="Description"
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
  </div>
  <div className="mb-2">
    <input
      className="form-control"
      placeholder="Category"
      value={category}
      onChange={e => setCategory(e.target.value)}
    />
  </div>
  <div className="mb-2">
    <input
      type="number"
      className="form-control"
      placeholder="Amount (Ksh)"
      value={amount}
      onChange={e => setAmount(e.target.value)}
    />
  </div>
  <div className="mb-2">
    <input
      type="date"
      className="form-control"
      value={date}
      onChange={e => setDate(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary">Add Expense</button>
</form>
  );
}

export default ExpenseForm;
