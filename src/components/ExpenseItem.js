import React, {useContext} from 'react';
import {TiDelete, TiMinus, TiPlus} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';


const ExpenseItem = ({cost, name, id}) => {
    const {currency, dispatch} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{`${currency} ${cost}`}</td>
            <td>
                <TiPlus
                    size='1.5em'
                    className="text-success"
                    onClick={() => increaseAllocation(name)}
                />
            </td>
            <td>
                <TiMinus
                    size='1.5em'
                    className="text-secondary"
                    onClick={() => decreaseAllocation(name)}
                />
            </td>
            <td>
                <TiDelete
                    size='1.5em'
                    className="text-danger"
                    onClick={handleDeleteExpense}
                />
            </td>
        </tr>
    );
};
export default ExpenseItem;