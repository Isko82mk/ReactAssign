import React from 'react'
import ExpenceItem from '../ExpenceItem/ExpenceItem'

import './ExpencesList.css'

const ExpencesList = (props) => {

    if (props.expenses.length === 0) {
        return <h1 className='expenses-list__fallback'>Expences not found!</h1>
    }
    //console.log(props.expenses.length)
    return (

        <ul className='expenses-list'>
            {
                props.expenses.map(ex => {
                    return <ExpenceItem
                        key={ex.id}
                        title={ex.title}
                        amount={ex.amount}
                        date={ex.date}
                    />
                })
            }
        </ul>

    )



}

export default ExpencesList;