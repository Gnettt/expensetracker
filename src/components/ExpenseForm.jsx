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
      expense,
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
    <div className="col-6">
    <form onSubmit={handleSubmit}>
        <h3><b>Add Expense</b></h3>
        <div className="mb-3">
  <input
      className="form-control"
      id="expense"
      placeholder="Expense"
      value={expenses}
      onChange={e => setExpense(e.target.value)}
    />
  </div>
  <div className="mb-3">
  <input
      className="form-control"
      id="description"
      placeholder="Description"
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input
      className="form-control"
      id="Category"
      placeholder="Category"
      value={category}
      onChange={e => setCategory(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input
      type="number"
      id="Amount"
      className="form-control"
      placeholder="Amount (Ksh)"
      value={amount}
      onChange={e => setAmount(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input
      type="date"
      id="Date"
      className="form-control"
      placeholder="Date"
      value={date}
      onChange={e => setDate(e.target.value)}
    />
  </div>
  <div className="mb-3">
  <button type="submit" className="btn btn-dark btn-sm">Add Expense</button>
  </div>
</form>
</div>
  );
}

export default ExpenseForm;
