import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ChangeCurrency = () => {
    const {dispatch } = useContext(AppContext);
    const changeLocation = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    const options = [
        {value: '$', label: '$ Dollar'},
        {value: '£', label: '£ Pound'},
        {value: '€', label: '€ Euro'},
        {value: '₹', label: '₹ Rupee'},
    ]

    return (
        <div className="alert" style={{background: '#B0E5B0'}}> Currency:
            <select name="currency" id="currency" className="currency-dropdown"
                    onChange={event => changeLocation(event.target.value)}>
                {options.map(option => (
                    <option key={option.value.toLowerCase()} className="currency-dropdown-option">
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default ChangeCurrency;