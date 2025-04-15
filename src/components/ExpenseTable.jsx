function ExpenseTable({ expenses, onDelete }) {
    return (
      <table className="table table-striped table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>id</th>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount (Ksh)</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {expenses.map((expense) => (
          <tr>
            <td>{expense.id}</td>
            <td>{expense.expense}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount.toFixed(2)}</td>
            <td>{expense.date}</td>
            <td>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  