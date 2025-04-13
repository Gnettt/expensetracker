import ExpenseRow from "./ExpenseRow"
import { useState } from "react"

return (
    <table className="table table-striped">
        <caption>Expense Tracker</caption>
        <thead>
            <tr>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <ExpenseRow/>
        </tbody>
    </table>
);