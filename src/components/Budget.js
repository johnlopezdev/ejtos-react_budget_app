
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);
    const outOfBudget = totalExpenses >= budget;

    const handleBudgetChange = (budgetVal) => {
        if (outOfBudget) {
            alert('You cannot reduce the budget value lower than the spending!');
            return;
        }

        setNewBudget(budgetVal);

        dispatch({
            type: 'SET_BUDGET',
            payload: budgetVal
        })
    }
    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency} &nbsp;</label>
            <input type="number" step="10" value={newBudget} onChange={({target: {value}}) => handleBudgetChange(value)}></input>
        </div>
    );
};
export default Budget;