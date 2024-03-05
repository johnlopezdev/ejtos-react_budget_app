
import React, {useContext, useEffect} from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const outOfBudget = totalExpenses >= budget;
    const alertType = outOfBudget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {`${currency} ${budget - totalExpenses}`}</span>
        </div>
    );
};
export default Remaining;