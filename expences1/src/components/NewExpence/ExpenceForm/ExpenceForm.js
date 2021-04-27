import React, { useState } from 'react'

import './ExpenceForm.css'

const ExpenceForm = (props) => {

    const [enteredTitle, setTitle] = useState('');

    const [enteredAmount, setAmount] = useState('');

    const [enterdDate, setDate] = useState('');


    const titleChangeHandler = (event) => {
        //console.log(event.target.value)

        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        //console.log(event.target.value)
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        //console.log(event.target.value)
        setDate(event.target.value)
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enterdDate)
        }

        //console.log(expenseData)
        props.onSaveExpenceData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>

            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                        value={enterdDate}
                        onChange={dateChangeHandler} />
                </div>

            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expences</button>
            </div>
        </form>
    )
}

export default ExpenceForm