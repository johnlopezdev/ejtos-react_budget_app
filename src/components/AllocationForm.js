import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import {Form, Button, InputGroup} from "react-bootstrap";

const AllocationForm = (props) => {
    const { dispatch, remaining, currency  } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    const submitEvent = () => {
        if(cost > remaining) {
            alert(`The value cannot exceed remaining funds ${currency}`+ remaining);
            setCost("");
            return;
        }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };
    return (
        <div>
            <div className='row'>
                <div className="input-group mt-3">
                    <div>
                        <div style={{marginLeft: '28px'}}>
                            <InputGroup>
                                <InputGroup.Text className="input-group-text"
                                                 htmlFor="inputGroupSelect01">Department</InputGroup.Text>
                                <select className="custom-select" id="inputGroupSelect01"
                                        onChange={(event) => setName(event.target.value)}>
                                    <option defaultValue>Choose...</option>
                                    <option value="Marketing" name="marketing"> Marketing</option>
                                    <option value="Sales" name="sales">Sales</option>
                                    <option value="Finance" name="finance">Finance</option>
                                    <option value="HR" name="hr">HR</option>
                                    <option value="IT" name="it">IT</option>
                                    <option value="Admin" name="admin">Admin</option>
                                </select>
                            </InputGroup>
                        </div>
                    </div>

                    <div style={{marginLeft: '28px'}}>
                        <InputGroup>
                            <InputGroup.Text className="input-group-text"
                                             htmlFor="inputGroupSelect02">Allocation</InputGroup.Text>
                            <select className="custom-select" id="inputGroupSelect02"
                                    onChange={(event) => setAction(event.target.value)}>
                                <option defaultValue value="Add" name="Add">Add</option>
                                <option value="Reduce" name="Reduce">Reduce</option>
                            </select>
                        </InputGroup>
                    </div>
                    <div style={{ marginLeft: '28px' }}>
                        <InputGroup>
                            <InputGroup.Text>{currency}</InputGroup.Text>
                            <Form.Control
                                required='required'
                                type='number'
                                id='cost'
                                value={cost}
                                step="10"
                                onChange={(event) => setCost(event.target.value)}
                            />
                            <Button className="btn btn-primary" onClick={submitEvent}>
                                Save
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AllocationForm;