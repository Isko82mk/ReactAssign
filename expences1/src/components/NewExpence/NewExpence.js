import React, { useState } from 'react'
import ExpenceForm from './ExpenceForm/ExpenceForm'

import './NewExpence.css'

const NewExpence = (props) => {


    const [isEditing, setIsEditig] = useState(false);



    const saveExpenceDataHandler = (eneteredExpenceData) => {
        const expenseData = {
            ...eneteredExpenceData,
            id: Math.random().toString()
        }
        props.onAddExpence(expenseData)
        setIsEditig(false)
        console.log(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditig(true)
    }

    ///console.log(isEditing)

    const stopEditingHandler = () => {
        setIsEditig(false)
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expence</button>}
            {isEditing && <ExpenceForm onSaveExpenceData={saveExpenceDataHandler} cancelButton={stopEditingHandler} />}
        </div>
    )

}

export default NewExpence;