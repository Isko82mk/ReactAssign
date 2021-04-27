import React from 'react'
import ExpenceForm from './ExpenceForm/ExpenceForm'

import './NewExpence.css'

const NewExpence = (props) => {

    const saveExpenceDataHandler = (eneteredExpenceData) => {
        const expenseData = {
            ...eneteredExpenceData,
            id: Math.random().toString()
        }
        props.onAddExpence(expenseData)
        console.log(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenceForm
                onSaveExpenceData={saveExpenceDataHandler} />
        </div>
    )

}

export default NewExpence;