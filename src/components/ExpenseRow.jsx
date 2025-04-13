export default function ExpenseRow({ expense, onDelete }) {
    const handleDelete = () => {
      onDelete(expense.id);
    };
  
    return (
      <tr>
        <td>{expense.expense}</td>
        <td>{expense.description}</td>
        <td>{expense.category}</td>
        <td>{expense.amount.toFixed(2)}</td>
        <td>{new Date(expense.date).toLocaleDateString()}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }